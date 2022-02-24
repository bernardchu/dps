import { Animal } from "./Animal";
import { RescueGroupsV2ResponseToAnimalConverter } from "./RescueGroupsV2ResponseToAnimalConverter";

/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const aws = require('aws-sdk');
const _ = require('lodash');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
var bodyParser = require('body-parser')
var express = require('express')

const ssm = new aws.SSM();
const nodeFetch = require('node-fetch');
const dynamodb = new aws.DynamoDB.DocumentClient();

let tableName = "available";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

// require('dotenv').config();
aws.config.update({ region: process.env.TABLE_REGION });

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

/**********************
 * Example get method *
 **********************/

/**
 * Assumes/requires that the available-<env name> table exists. We can't create it on the fly if it doesn't because
 * there is a delay after table creation.
 */
app.get('/available/sync', async function (req, res) {
  try {
    await emptyTable(tableName, dynamodb);
    console.log('emptied table ', tableName);

    // fetch and process data from RescueGroups API
    const rescuegroupsKeyParameter = await ssm.getParameter({
      Name: process.env['RESCUEGROUPS_KEY'],
      WithDecryption: true,
    }).promise();
    const rescuegroupsKey = rescuegroupsKeyParameter.Parameter.Value;
    const rescuegroupsUrl = new URL('https://toolkit.rescuegroups.org/javascript/v2.0/');
    rescuegroupsUrl.searchParams.append('key', rescuegroupsKey);
    const response = await nodeFetch(rescuegroupsUrl.toString());
    const raw = await response.text();
    const animals: Animal[] = RescueGroupsV2ResponseToAnimalConverter.parse(raw);

    // batch up data and put in DynamoDB
    const batches: Animal[][] = _.chunk(animals, DYNAMODB_BATCH_LIMIT);
    const requests = batches.map(batch => {
      const RequestItems = {};
      RequestItems[tableName] = batch.map(animal => {
        return {
          PutRequest: {
            Item: animal.serialize()
          }
        }
      });
      return { RequestItems };
    })
    return Promise.all(requests.map(r => dynamodb.batchWrite(r).promise()))
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

/**
 * Empties table to prepare to fill it. We can't just delete the table because DynamoDB takes up to a minute
 * or sometimes even more to fully delete a table and we can't wait that long.
 * @param tableName name of table to empty
 * @param ddb dynamoDB instance
 */
async function emptyTable(tableName: string, ddb) {
  const scanParams = {
    TableName: tableName,
    AttributesToGet: ['id']
  }

  ddb.scan(scanParams, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      const batches = _.chunk(data.Items, DYNAMODB_BATCH_LIMIT);
      const requests = batches.map(batch => {
        const RequestItems = {};
        RequestItems[tableName] = batch.map(animal => {
          return {
            DeleteRequest: {
              Key: {
                'id': animal.id
              }
            }
          }
        });
        return { RequestItems };
      })
      return Promise.all(requests.map(r => dynamodb.batchWrite(r).promise()))
        .catch(err => console.error(err));
    }
  });
}
