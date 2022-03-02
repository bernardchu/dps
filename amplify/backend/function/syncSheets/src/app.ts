import * as AWS from 'aws-sdk';
import { Auth, sheets_v4 } from 'googleapis';
import { SheetDataProcessor } from './SheetDataProcessor';
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

const ssm = new AWS.SSM();
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
const path = "/sheets/sync";
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

/********************************
 * HTTP Get method for list objects *
 ********************************/

/**
 * Assumes the existence of a sheets-<env name> table.
 */
app.get(path, async function (req, res) {
  try {
    const dpsSheetsCredentialsParameter = await ssm.getParameter({
      Name: '/amplify/dpsGoogleSheetCredentials',
      WithDecryption: true,
    }).promise();
    const credentialsJSON = dpsSheetsCredentialsParameter.Parameter.Value;
    const credentials = JSON.parse(credentialsJSON);

    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const client = new Auth.GoogleAuth({
      scopes,
      credentials
    });
    const ranges = {
      'events': 'A:E',
      'sticky-dogs': 'A:D',
      'volunteers': 'A:E',
      'fosters': 'A:C',
      'icu': 'A:C',
      'news': 'A:G',
      'newsletters': 'A:C'
    };

    new sheets_v4.Sheets({ auth: client }).spreadsheets.get({
      spreadsheetId: '1tismwQONGusoCzAC4cCuPVHTSMdV9hSvkTNDbCiVDKw',
      ranges: Object.keys(ranges).map(key => `${key}!${ranges[key]}`), // e.g. events!A:E
      includeGridData: true
    })
      .then((sheetResponse) => {
        const sheets = sheetResponse.data.sheets;
        const processed = sheets.map(sheet => {
          return {
            name: sheet.properties.title,
            data: SheetDataProcessor.simplify(sheet.data[0].rowData),
            lastUpdated: new Date().toUTCString()
          }
        });
        const RequestItems = {};
        RequestItems[tableName] = processed.map(sheet => {
          return {
            PutRequest: {
              Item: sheet
            }
          }
        });
        return dynamodb.batchWrite({ RequestItems }).promise()
      })
      .then(responses => res.json({ success: responses, url: req.url }))
      .catch(err => res.json({ error: err, url: req.url, body: req.body }))
  } catch (err) {
    console.log(err);
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
