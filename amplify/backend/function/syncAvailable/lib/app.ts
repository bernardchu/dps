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

app.get('/available/sync', async function (req, res) {
  console.log('foo');
  try {
    // await createTableIfNonexistent(tableName, dynamodb);
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
    res.json({ error: err, url: req.url, body: req.body });
  }
});

app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

async function createTableIfNonexistent(name: string, ddb): Promise<null> {
  return ddb.listTables({})
    .promise()
    .then((data) => {
      console.log(`Found tables ${data.tableNames}`);
      const exists = data.TableNames
        .filter(name => {
          return name === tableName;
        })
        .length > 0;
      if (exists) {
        console.log(`table ${tableName} exists.`)
        return Promise.resolve();
      }
      else {
        console.log(`table ${tableName} does not exist, attempting to create.`)
        const params = {
          TableName: tableName,
          KeySchema: [{
            AttributeName: "id",
            KeyType: "HASH", //Partition key
          }],
          AttributeDefinitions: [
            { AttributeName: 'id', AttributeType: 'S' },
            { AttributeName: 'lastUpdated', AttributeType: 'S' },
            { AttributeName: 'name', AttributeType: 'S' },
            { AttributeName: 'species', AttributeType: 'S' },
            { AttributeName: 'breed', AttributeType: 'S' },
            { AttributeName: 'primaryBreed', AttributeType: 'S' },
            { AttributeName: 'secondaryBreed', AttributeType: 'S' },
            { AttributeName: 'sex', AttributeType: 'S' },
            { AttributeName: 'mixed', AttributeType: 'B' },
            { AttributeName: 'goodWithDogs', AttributeType: 'B' },
            { AttributeName: 'goodWithCats', AttributeType: 'B' },
            { AttributeName: 'goodWithKids', AttributeType: 'B' },
            { AttributeName: 'declawed', AttributeType: 'B' },
            { AttributeName: 'housetrained', AttributeType: 'B' },
            { AttributeName: 'age', AttributeType: 'S' },
            { AttributeName: 'specialNeeds', AttributeType: 'B' },
            { AttributeName: 'altered', AttributeType: 'B' },
            { AttributeName: 'size', AttributeType: 'S' },
            { AttributeName: 'upToDate', AttributeType: 'B' },
            { AttributeName: 'color', AttributeType: 'S' },
            { AttributeName: 'coatLength', AttributeType: 'S' },
            { AttributeName: 'pattern', AttributeType: 'S' },
            { AttributeName: 'description', AttributeType: 'M' },
            { AttributeName: 'pictures', AttributeType: 'M' },
          ]
        };
        return dynamodb.createTable(params).promise();
      }
    });
}
