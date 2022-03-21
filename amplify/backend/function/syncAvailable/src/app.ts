import { Animal } from "./Animal";
import { AvailableSyncer } from "./AvailableSyncer";
import * as AWS from 'aws-sdk';

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
var bodyParser = require('body-parser')
var express = require('express')

const ssm = new AWS.SSM();
const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "available";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

AWS.config.update({ region: process.env.TABLE_REGION });

// declare a new express app
var app = express();
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const DYNAMODB_BATCH_LIMIT = 25;

/**
 * Assumes/requires that the available-<env name> table exists. We can't create it on the fly if it doesn't because
 * there is a delay after table creation. We can't just delete and recreate the table because DynamoDB can take a minute
 * or more to fully delete a table and we can't wait that long, plus the aforementioned creation delay.
 */
app.get('/available/sync', async function (req, res) {
  const syncer = new AvailableSyncer(tableName, dynamodb, DYNAMODB_BATCH_LIMIT);
  try {
    // get animals currently in the db
    const dbAnimals = await syncer.getDbAnimals();

    const rescueGroupsKeyName = '/amplify/rescueGroupsKey';
    const rescueGroupsApiKeyName = '/amplify/rescueGroupsApiKey';
    // fetch and process data from RescueGroups API
    const keyParameters = await ssm.getParameters({
      Names: [rescueGroupsKeyName, rescueGroupsApiKeyName],
      WithDecryption: true,
    }).promise();
    const rescueGroupsKey: string = keyParameters.Parameters.find(p => p.Name === rescueGroupsKeyName).Value;
    const rescueGroupsApiKey: string = keyParameters.Parameters.find(p => p.Name === rescueGroupsApiKeyName).Value;
    const animals: Animal[] = await syncer.fetchPetDataFromRescueGroups(rescueGroupsKey);
    const videoData = await syncer.fetchPetVideoDataFromRescueGroups(rescueGroupsApiKey);
    const animalsWithVideo: Animal[] = syncer.joinAnimalsWithVideos(animals, videoData);

    // compare current db animals with incoming to know which to delete
    const animalIdsToDelete: string[] = dbAnimals
      .filter(animal => !animalsWithVideo.find(a => a.id === animal.id))
      .map(animal => animal.id);
    await syncer.deleteFromTable(animalIdsToDelete);

    // batch up data and write/overwrite new/existing animals
    return syncer.writeAnimals(animalsWithVideo)
      .then(responses => res.json({ success: responses, url: req.url }))
      .catch(err => res.json({ error: err, url: req.url, body: req.body }))
  } catch (err) {
    console.log(err);
    res.json({ error: err, url: req.url, body: req.body });
  }
});

app.listen(3000, function () {
  console.log("App started: sync available animals")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
