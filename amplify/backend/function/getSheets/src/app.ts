import * as AWS from 'aws-sdk';
import { ISheet } from '../../common/ISheet';
import { DatesHandler, ISheetEvent } from './DatesHandler';
import { FeaturedHandler, INewsItemDB } from './FeaturedHandler';
import { FostersHandler, ISheetFoster } from './FostersHandler';
import { SheetsMapper } from './SheetsMapper';
import { IVolunteer, VolunteersHandler } from './VolunteersHandler';
import { ISuccessStory, IDBSuccessStory, ISuccessStoryResponse } from '../../common/ISuccessStory';

/*
Each endpoint fetches the JSON blob from the corresponding row in the sheets table, organizes it, and returns it.
Exceptions: the /success/ endpoints read from the more structured successStories table and the /sticky endpoint 
will probably be deprecated so it just returns []
*/

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let sheetsTableName = "sheets";
let successStoriesTableName = "successStories";
if (process.env.ENV && process.env.ENV !== "NONE") {
  sheetsTableName = sheetsTableName + '-' + process.env.ENV;
  successStoriesTableName = successStoriesTableName + '-' + process.env.ENV;
}

const partitionKeyName = "name";
const path = "/sheets";
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods, set cache-control
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  res.set('Cache-control', `public, must-revalidate, max-age=${60 * 5 /* 5m */}`);
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

async function getSheet(name: string): Promise<ISheet> {
  const params = {};
  params[partitionKeyName] = name;

  const getItemParams = {
    TableName: sheetsTableName,
    Key: params
  }

  return dynamodb.get(getItemParams).promise()
    .then((data: AWS.DynamoDB.GetItemOutput) => {
      return data.Item as unknown as ISheet;
    });
}

/*********
 * Dates *
 *********/
app.get(path + '/dates', function (req, res) {
  getSheet('events').then((sheet: ISheet) => {
    const events: string[][] = sheet.data;
    const eventData: ISheetEvent[] = SheetsMapper.mapData(events, ['date', 'time', 'location', 'lastinterview']);
    res.json(DatesHandler.organize(eventData));
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/************
 * Featured *
 ************/
app.get(path + '/featured', function (req, res) {
  getSheet('news').then((sheet: ISheet) => {
    const news: INewsItemDB[] = SheetsMapper.mapData(sheet.data, [
      'title',
      'imgurl',
      'href',
      'href_text',
      'description',
      'new_tab',
      'expires'
    ]);
    res.json(FeaturedHandler.organize(news));
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/***********
 * Fosters *
 ***********/
app.get(path + '/fosters', function (req, res) {
  getSheet('fosters').then((sheet: ISheet) => {
    const fosters: ISheetFoster[] = SheetsMapper.mapData(sheet.data, ['name', 'photo', 'bio']);
    res.json(FostersHandler.organize(fosters));
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/*******
 * ICU *
 *******/
interface IICUAnimal {
  name: string;
  photo: string;
  bio: string;
}

app.get(path + '/icu', function (req, res) {
  getSheet('icu').then((sheet: ISheet) => {
    const icu: IICUAnimal[] = SheetsMapper.mapData(sheet.data, ['name', 'photo', 'bio']);
    res.json(icu);
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/***************
 * Newsletters *
 ***************/
interface INewsletter {
  date: string;
  link: string;
  pdf: string;
}

app.get(path + '/newsletters', function (req, res) {
  getSheet('newsletters').then((sheet: ISheet) => {
    const newsletters: INewsletter[] = SheetsMapper.mapData(sheet.data, ['date', 'link', 'pdf']);
    res.json(newsletters);
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/**************
 * Volunteers *
 **************/
app.get(path + '/volunteers', function (req, res) {
  getSheet('volunteers').then((sheet: ISheet) => {
    const volunteers: IVolunteer[] = SheetsMapper.mapData(sheet.data, ['name', 'title', 'type', 'photo', 'bio']);
    res.json(VolunteersHandler.organize(volunteers));
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

/*********
 * Modal *
 *********/
interface IDpsModalContent {
  heading: string;
  bodyText: string;
  imgUrl: string;
  buttonText: string;
}

app.get(path + '/modal', function (req, res) {
  getSheet('modal').then((sheet: ISheet) => {
    const modalContent: IDpsModalContent = SheetsMapper.mapData(sheet.data, ['heading', 'bodyText', 'imgUrl', 'buttonText'])[0];
    res.json(modalContent);
  })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not modal content: ' + err.message });
    })
});

/***************
 * Sticky Dogs *
 ***************/
// Probably will be deprecated so just a stub for now.
app.get(path + '/sticky', function (req, res) {
  res.json([]);
});

/*******************
 * Success Stories *
 *******************/
app.get(path + '/success/all', function (req, res) {
  dynamodb.scan({ TableName: successStoriesTableName }).promise()
    .then((data: AWS.DynamoDB.ScanOutput) => {
      const storiesById: IDBSuccessStory[] = data.Items as unknown as IDBSuccessStory[];
      const firstStories: ISuccessStory[] = storiesById.map(sbi => sbi.stories[0]);
      const stories = firstStories.map(story => {
        return {
          id: story.id,
          name: story.name,
          photo1: story.photo1
        };
      });
      res.json(stories);
    })
    .catch(err => {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err.message });
    })
});

const successPartitionKeyName = 'id';
app.get(path + `/success/object/:${successPartitionKeyName}`, function (req, res) {
  const params = {};
  params[successPartitionKeyName] = req.params[successPartitionKeyName];

  const getItemParams: AWS.DynamoDB.GetItemInput = {
    TableName: successStoriesTableName,
    Key: params
  }

  dynamodb.get(getItemParams).promise()
    .then((data) => {
      const animal: IDBSuccessStory = data.Item as IDBSuccessStory;
      const stories: ISuccessStory[] = animal.stories;
      const ret: ISuccessStoryResponse = {
        id: animal.id,
        name: animal.stories[0].name,
        updates: stories.map(story => {
          return {
            date: story.date,
            story: story.story,
            photos: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'].map(key => story[key]).filter(p => !!p)
          };
        })
      };
      res.json(ret);
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
