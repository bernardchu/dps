import { species, IAnimalFull } from '../../common/IAnimal';
import * as AWS from 'aws-sdk';

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

const partitionKeyName = "name";
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

interface IEvent {
  date: Date,
  time: string,
  location: string
}

// Awful, copied from DatesHandler. Can't share code across lambdas yet without layers.
const stores = {
  'capitol': {
    name: 'San Jose Pet Food Express on Capitol Expressway',
    map_url: 'http://maps.google.com/maps?daddr=1787%20E.%20Capitol%20Expressway,San%20Jose,CA,95121'
  },
  'palo alto': {
    name: 'Palo Alto Pet Food Express',
    map_url: 'https://www.google.com/maps/dir//Pet+Food+Express,+3910+Middlefield+Rd,+Palo+Alto,+CA+94303/@37.4191608,-122.180418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fba6c4de54605:0x2f24f8c213697755!2m2!1d-122.1103434!2d37.4191994'
  },
  'campbell': {
    name: 'Campbell Pet Food Express',
    map_url: 'http://maps.google.com/maps?daddr=1902%20South%20Bascom%20Avenue,Campbell,CA,95008'
  },
  'blossom hill': {
    name: 'San Jose Pet Food Express on Blossom Hill',
    map_url: 'http://maps.google.com/maps?daddr=1152%20Blossom%20Hill%20Road,San%20Jose,CA,95118'
  },
  'redwood city': {
    name: 'Redwood City Pet Food Express @ Woodside Plaza',
    map_url: 'http://maps.google.com/maps?daddr=372%20Woodside%20Plaza,Redwood%20City,CA,94061'
  },
  'saratoga': {
    name: 'Saratoga Pet Food Express',
    map_url: 'https://maps.google.com/maps?daddr=Pet+Food+Express+12900+Saratoga+Sunnyvale+Road+Saratoga+CA+95070'
  },
  'stevens creek': {
    name: 'Stevens Creek Pet Food Express',
    map_url: 'https://www.google.com/maps/preview#!data=!1m4!1m3!1d46206!2d-121.993378!3d37.320762!4m13!3m12!1m0!1m1!1sPet+Food+Express+5148+Stevens+Creek+Boulevard+San+Jose+CA+95129!3m8!1m3!1d50735!2d-122.095873!3d37.36794!3m2!1i1024!2i768!4f13.1&fid=0'
  },
  'pasadena': {
    name: 'Pasadena Pet Food Express',
    map_url: 'https://maps.google.com/maps?q=320+S.+Lake,+Pasadena,+CA+91101&ie=UTF-8&ei=Ce5zUviTNsmzigKpiIHoAw&ved=0CAoQ_AUoAg'
  },
  'adoptathon': {
    name: 'Bay Area Pet Fair',
    map_url: 'http://www.bayareapetfair.org'
  },
  'tbd': {
    name: 'Location TBD',
    map_url: ''
  },
  'ba_expo': {
    name: 'Bay Area Pet Expo (Mega Adoption Area and Booth #409)',
    map_url: 'http://www.bayareapetexpo.com/directions.html'
  },
  'vegas_expo': {
    name: 'Vegas Pet Expo (find us at the Valentine\'s Day Booth)',
    map_url: 'http://www.vegaspetexpo.com/directions.html'
  },
  'eb_adoptathon': {
    name: 'East Bay SPCA Adoptathon',
    map_url: 'http://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Jack+London+Square%2C+Oakland%2C+California&FORM=FBKPL0&name=East+Bay+SPCA+Adoptathon&mkt=en-US'
  },
  'sd_expo': {
    name: 'San Diego Pet Expo, Del Mar Fairgrounds',
    map_url: 'http://petexposandiego.com/'
  },
  'town and country': {
    name: 'Pet-A-Palooza',
    map_url: 'http://www.tandcvillage.com/directions.html'
  },
  'long beach': {
    name: 'Long Beach Pet Food Express',
    map_url: 'https://www.google.com/maps?daddr=Pet+Food+Express++4220+Long+Beach+Blvd.++++++Long+Beach+++CA+++90807'
  },
  'carlsbad': {
    name: 'Carlsbad Pet &amp; Feed',
    map_url: 'https://www.carlsbadpetandfeed.com/'
  },
  'hoover_park': {
    name: 'Palo Alto Hoover Park',
    map_url: 'https://goo.gl/maps/No6vLMBKx594diqw7'
  }
}

/*******************
 * Dog Application *
 *******************/

app.get(path + '/dog', async function (req, res) {
  const availableAttributesToGet: Array<keyof IAnimalFull> = [
    'name',
    'species'
  ];
  const scanParams: AWS.DynamoDB.ScanInput = {
    TableName: availableTableName,
    AttributesToGet: availableAttributesToGet
  }
  const availableAnimals: { name: string, species: species }[] = await dynamodb.scan(scanParams).promise().then((data: AWS.DynamoDB.ScanOutput) => data.Items as unknown as { name: string, species: species }[]);
  const dogs = availableAnimals.filter(a => a.species === 'Dog');

  const getEventsParams = {};
  getEventsParams[partitionKeyName] = 'events';

  const getItemParams: AWS.DynamoDB.GetItemInput = {
    TableName: sheetsTableName,
    Key: getEventsParams
  }
  const eventsSheet = await dynamodb.get(getItemParams).promise().then((data) => data.Item);
  const events: IEvent[] = eventsSheet.data.map(e => {
    return {
      date: new Date(e[0]),
      time: e[1],
      location: e[2]
    };
  });
  const upcomingSaturdayEvents: IEvent[] = events.filter(e => isUpcoming(e)).filter(e => isSaturday(e));
  // now sorted ascending
  upcomingSaturdayEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
  if (!upcomingSaturdayEvents.length) {
    res.json({
      'next_adoption': 'Our next adoption date is not known yet, but are you generally available Saturdays at noon in Palo Alto?',
      dogs
    });
  } else {
    const imminent: IEvent = upcomingSaturdayEvents[0];
    // "Saturday, April 2, 2022"
    const nextDate = imminent.date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const location = stores[imminent.location].name;
    const startTime: string = imminent.time.trim().substring(0, imminent.time.indexOf(' '));
    res.json({
      'next_adoption': `Our next adoption date is ${nextDate}. If you are contacted by our interview team and your application is approved, will you be able to be at the ${location} at ${startTime}?`,
      dogs
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

function isSaturday(event: IEvent) {
  const saturdayIndex = 6;
  return event.date.getDay() === saturdayIndex;
}

function isUpcoming(event: IEvent): boolean {
  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  return event.date.getTime() - new Date().getTime() > -millisecondsInOneDay;
}

