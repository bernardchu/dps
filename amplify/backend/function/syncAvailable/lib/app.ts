/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const aws = require('aws-sdk');
const ssm = new aws.SSM();
const nodeFetch = require('node-fetch');

require('dotenv').config();

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

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


/**********************
 * Example get method *
 **********************/

app.get('/available/sync', async function (req, res) {
  try {
    const rescuegroupsKeyParameter = await ssm.getParameter({
      Name: process.env['RESCUEGROUPS_KEY'],
      WithDecryption: true,
    }).promise();
    const rescuegroupsKey = rescuegroupsKeyParameter.Parameter.Value;
    const rescuegroupsUrl = new URL('https://toolkit.rescuegroups.org/javascript/v2.0/');
    rescuegroupsUrl.searchParams.append('key', rescuegroupsKey);
    const response = await nodeFetch(rescuegroupsUrl.toString());
    const raw = await response.text();
    res.json({ success: raw, url: req.url });
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
