import * as AWS from 'aws-sdk';
import _ = require('lodash');
const ImgixClient = require('@imgix/js-core');
import { IAnimalCompact, IAnimalDetailedProcessed, IAnimalFull, IAnimalPreCompact } from '../../common/IAnimal';

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

let tableName = "available";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/available";
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

/****************************************
 * HTTP Get method for list all objects *
 ****************************************/

/**
 * Get all available animals.
 * Normally /available seems like it would be the right path but there's some weird behavior with AWS API gateways
 * when attempting to use just the root of the resource so that's why /all is added.
 */
app.get(path + '/all', async function (req, res) {
  const imgixKeyParameter = await ssm.getParameter({
    Name: '/amplify/imgixSecureUrlToken',
    WithDecryption: true,
  }).promise();
  const imgixSecureUrlToken = imgixKeyParameter.Parameter.Value;
  const imgixClient = new ImgixClient({
    domain: 'dps-wp.imgix.net',
    secureURLToken: imgixSecureUrlToken,
  });

  const attributesToGet: Array<keyof IAnimalFull> = [
    partitionKeyName,
    'age',
    'breed',
    'gender',
    'pictures',
    'name',
    'species'
  ];
  const scanParams: AWS.DynamoDB.ScanInput = {
    TableName: tableName,
    AttributesToGet: attributesToGet
  }

  dynamodb.scan(scanParams, (err, data: AWS.DynamoDB.ScanOutput) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: 'Could not load items: ' + err });
    } else {
      const compactAnimals: IAnimalCompact[] = (data.Items as unknown as IAnimalPreCompact[]).map((animal: IAnimalPreCompact) => {
        const compact: IAnimalCompact = {
          id: animal.id,
          age: animal.age,
          breed: animal.breed,
          gender: animal.gender,
          name: animal.name,
          species: animal.species,
          imgUrl: signImageUrl(animal.pictures[0].image, imgixClient)
        }
        return compact;
      });
      const groupedBySpecies: { [key: string]: IAnimalCompact[] } = _.groupBy(compactAnimals, a => a.species);
      const groupedByLowerCasedPluralizedSpecies: { [key: string]: IAnimalCompact[] } = Object.keys(groupedBySpecies)
        .reduce((groups, key) => {
          const lowerCasedPluralizedSpecies = key.toLowerCase() + 's';
          groups[lowerCasedPluralizedSpecies] = groupedBySpecies[key];
          return groups;
        }, {});
      res.json(groupedByLowerCasedPluralizedSpecies);
    }
  });
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + '/object' + hashKeyPath + sortKeyPath, async function (req, res) {
  const imgixKeyParameter = await ssm.getParameter({
    Name: '/amplify/imgixSecureUrlToken',
    WithDecryption: true,
  }).promise();
  const imgixSecureUrlToken = imgixKeyParameter.Parameter.Value;
  const imgixClient = new ImgixClient({
    domain: 'dps-wp.imgix.net',
    secureURLToken: imgixSecureUrlToken,
  });

  const params = {};
  params[partitionKeyName] = req.params[partitionKeyName];
  try {
    params[partitionKeyName] = convertUrlType(req.params[partitionKeyName], partitionKeyType);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: 'Wrong column type ' + err });
  }

  const getItemParams: AWS.DynamoDB.GetItemInput = {
    TableName: tableName,
    Key: params
  }

  dynamodb.get(getItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: 'Could not load item: ' + err.message });
    } else {
      if (data.Item) {
        const animal: IAnimalFull = data.Item as unknown as IAnimalFull
        const processed: IAnimalDetailedProcessed = {
          id: animal.id,
          age: animal.age,
          breed: animal.breed,
          gender: animal.gender,
          name: animal.name,
          species: animal.species,
          upcoming: animal.upcoming,
          bio: animal.bio,
          boilerplate: animal.boilerplate,
          coatLength: animal.coatLength,
          goodWithDogs: animal.goodWithDogs,
          goodWithCats: animal.goodWithCats,
          goodWithKids: animal.goodWithKids,
          declawed: animal.declawed,
          lastUpdated: animal.lastUpdated,
          primaryBreed: animal.primaryBreed,
          secondaryBreed: animal.secondaryBreed,
          housetrained: animal.housetrained,
          specialNeeds: animal.specialNeeds,
          video: animal.video,
          contact: animal.contact,
          pictures: animal.pictures.map(p => signImageUrl(p.image, imgixClient))
        }
        res.json(processed);
      } else {
        res.json(data);
      }
    }
  });
});


app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

function signImageUrl(url: string, client: typeof ImgixClient): string {
  return client.buildURL(url);
}