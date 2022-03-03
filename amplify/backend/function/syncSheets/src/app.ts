import * as AWS from 'aws-sdk';
import { Auth, sheets_v4 } from 'googleapis';
import { SheetDataProcessor } from './SheetDataProcessor';
import { ISheet } from '../../common/ISheet';
import { ISuccessStory, IDBSuccessStory } from '../../common/ISuccessStory';
import _ = require('lodash');

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
const DYNAMODB_BATCH_LIMIT = 25;

let sheetsTableName = "sheets";
let successStoriesTableName = "successStories";
if (process.env.ENV && process.env.ENV !== "NONE") {
  sheetsTableName = sheetsTableName + '-' + process.env.ENV;
  successStoriesTableName = successStoriesTableName + '-' + process.env.ENV;
}

const path = "/sheets/sync";
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

const spreadSheetId = '1tismwQONGusoCzAC4cCuPVHTSMdV9hSvkTNDbCiVDKw';
const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

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
      spreadsheetId: spreadSheetId,
      ranges: Object.keys(ranges).map(key => `${key}!${ranges[key]}`), // e.g. events!A:E
      includeGridData: true
    })
      .then((sheetResponse) => {
        const sheets = sheetResponse.data.sheets;
        const processed: ISheet[] = sheets.map(sheet => {
          return {
            name: sheet.properties.title,
            data: SheetDataProcessor.simplify(sheet.data[0].rowData),
            lastUpdated: new Date().toUTCString()
          }
        });
        const RequestItems = {};
        RequestItems[sheetsTableName] = processed.map(sheet => {
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

/**
 * Assumes the existence of a successStories-<env name> table.
 * Massages sheet data into IDBSuccessStory[] and saves in DB.
 */
app.get(path + '/success', async function (req, res) {
  try {
    const dpsSheetsCredentialsParameter = await ssm.getParameter({
      Name: '/amplify/dpsGoogleSheetCredentials',
      WithDecryption: true,
    }).promise();
    const credentialsJSON = dpsSheetsCredentialsParameter.Parameter.Value;
    const credentials = JSON.parse(credentialsJSON);

    const client = new Auth.GoogleAuth({
      scopes,
      credentials
    });

    new sheets_v4.Sheets({ auth: client }).spreadsheets.get({
      spreadsheetId: spreadSheetId,
      ranges: ['success!A:I'],
      includeGridData: true
    })
      .then((sheetResponse) => {
        const successStorySheet = sheetResponse.data.sheets[0];
        const gridData: string[][] = SheetDataProcessor.simplify(successStorySheet.data[0].rowData)
        const columns = [
          'id',
          'name',
          'date',
          'story',
          'photo1',
          'photo2',
          'photo3',
          'photo4',
          'photo5'
        ];
        // TODO: basically a copy of SheetsMapper; is there a decent way to share code? Can't put into ../../common
        const organized: ISuccessStory[] = gridData.map(row => {
          return columns.reduce((obj, key, index) => {
            obj[key as string] = row[index];
            return obj;
          }, {}) as unknown as ISuccessStory;
        });
        const byId: { [key: string]: ISuccessStory[] } = _.groupBy(organized, ss => ss.id);
        const dbEntries: IDBSuccessStory[] = Object.keys(byId).map(id => {
          return {
            id,
            stories: byId[id]
          };
        });

        // Write to db
        const batches = _.chunk(dbEntries, DYNAMODB_BATCH_LIMIT);
        const requests: AWS.DynamoDB.BatchWriteItemInput[] = batches.map(batch => {
          const RequestItems = {};
          RequestItems[successStoriesTableName] = batch.map(story => {
            return {
              PutRequest: {
                Item: story
              }
            }
          });
          return { RequestItems };
        });
        return Promise.all(requests.map(r => dynamodb.batchWrite(r).promise()));
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
