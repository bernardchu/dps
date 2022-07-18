import * as AWS from 'aws-sdk';
import { Auth, sheets_v4 } from 'googleapis';
import { SheetDataProcessor } from './SheetDataProcessor';
import { ISheet } from '../../common/ISheet';
import { IDBSuccessStory } from '../../common/ISuccessStory';
import _ = require('lodash');
import SuccessStoriesSyncer from './successStoriesSyncer';

/*
Endpoints for syncing the sheets and successStories tables.
These tables are not cleared before writing to them; we assume that using the correct primary keys (sheet name
for most sheets or pet name for success stories) will ensure that the correct objects are updated.
If deletions of entire sheets or of individual success stories becomes common enough that going into
DynamoDB's web interface for the occasional deletion is not feasible, that functionality should be
straightforward to adapt from the syncAvailable code.
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

const path = "/sheets";
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
 * PUTs contents of all sheets except success stories into that table.
 * Does not delete sheets from DB that are no longer in the Google sheet as
 * sheet deletion is rare and none of these sheets are directly user-facing.
 */
app.get(path + '/sync', async function (req, res) {
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
      'events': 'A:H',
      'sticky-dogs': 'A:D',
      'modal': 'A:E',
      'volunteers': 'A:E',
      'fosters': 'A:C',
      'icu': 'A:C',
      'in-honor-of': 'A:C',
      'news': 'A:G',
      'newsletters': 'A:C'
    };

    new sheets_v4.Sheets({ auth: client }).spreadsheets.get({
      spreadsheetId: spreadSheetId,
      // Sheets "A1 notation": https://developers.google.com/sheets/api/guides/concepts#expandable-1
      ranges: Object.keys(ranges).map(key => `${key}!${ranges[key]}`), // e.g. events!A:H
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
app.get(path + '/success/sync', async function (req, res) {
  try {
    const successStoriesSyncer = new SuccessStoriesSyncer(successStoriesTableName, dynamodb, DYNAMODB_BATCH_LIMIT);
    // get SS currently in DB
    const currentStoryIds: string[] = await successStoriesSyncer.getDbSuccessStories();

    // get SS in Google Sheet
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

    const incomingStories: IDBSuccessStory[] = await successStoriesSyncer.getSuccessStoriesFromSheet(credentials, client, spreadSheetId);

    // delete SS that are no longer in the sheet
    const storyIdsToBeDeleted: string[] = currentStoryIds.filter(id => !incomingStories.find(s => s.id === id));
    await successStoriesSyncer.deleteFromTable(storyIdsToBeDeleted);

    // Write incoming SS to db
    successStoriesSyncer.writeToDb(incomingStories)
      .then(responses => res.json({ success: responses, url: req.url }))
      .catch(err => res.json({ error: err, url: req.url, body: req.body }));
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
