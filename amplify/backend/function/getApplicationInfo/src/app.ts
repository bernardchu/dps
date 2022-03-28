import * as AWS from 'aws-sdk';
import { ApplicationInfoService, IEvent } from './AppInfoService';

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let sheetsTableName = "sheets";
if (process.env.ENV && process.env.ENV !== "NONE") {
  sheetsTableName = sheetsTableName + '-' + process.env.ENV;
}
let availableTableName = "available";
if (process.env.ENV && process.env.ENV !== "NONE") {
  availableTableName = availableTableName + '-' + process.env.ENV;
}

const path = "/application";
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

const noUpcomingEventsMessage = 'Our next adoption date is not known yet, but are you generally available Saturdays at noon in Palo Alto?';

/*******************
 * Dog Application *
 *******************/

app.get(path + '/dog', async function (req, res) {
  const appInfoService = new ApplicationInfoService(dynamodb, availableTableName, sheetsTableName);
  const dogs = await appInfoService.getAnimals('Dog');
  const upcomingSaturdayEvents: IEvent[] = await appInfoService.getUpcomingSaturdayEvents();

  if (!upcomingSaturdayEvents.length) {
    res.json({
      'next_adoption': noUpcomingEventsMessage,
      dogs
    });
  } else {
    const imminent: IEvent = upcomingSaturdayEvents[0];
    res.json({
      'next_adoption': ApplicationInfoService.getUpcomingEventMessage(imminent),
      dogs
    });
  }
});

/*******************
 * Cat Application *
 *******************/

app.get(path + '/cat', async function (req, res) {
  const appInfoService = new ApplicationInfoService(dynamodb, availableTableName, sheetsTableName);
  const cats = await appInfoService.getAnimals('Cat');
  const upcomingSaturdayEvents: IEvent[] = await appInfoService.getUpcomingSaturdayEvents();

  if (!upcomingSaturdayEvents.length) {
    res.json({
      'next_adoption': noUpcomingEventsMessage,
      cats
    });
  } else {
    const imminent: IEvent = upcomingSaturdayEvents[0];
    res.json({
      'next_adoption': ApplicationInfoService.getUpcomingEventMessage(imminent),
      cats
    });
  }
});

app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

