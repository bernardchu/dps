import * as AWS from 'aws-sdk';
import { ISheet } from '../../common/ISheet';
import { DatesHandler, ISheetEvent } from './DatesHandler';

/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "sheets";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "name";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/sheets";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
}

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/
app.get(path + '/dates', function (req, res) {
  const params = {};
  params[partitionKeyName] = 'events';

  const getItemParams = {
    TableName: tableName,
    Key: params
  }

  dynamodb.get(getItemParams).promise()
    .then((data: AWS.DynamoDB.GetItemOutput) => {
      const sheet = data.Item as unknown as ISheet;
      const events: string[][] = sheet.data;
      const eventData: ISheetEvent[] = events.map(row => {
        return {
          date: row[0],
          time: row[1],
          location: row[2],
          lastinterview: row[3]
        }
      });
      res.json(DatesHandler.organize(eventData));
    })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })

});

app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
