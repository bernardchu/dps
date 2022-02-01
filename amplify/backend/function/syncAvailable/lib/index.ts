const awsServerlessExpress = require('aws-serverless-express');
const syncApp = require('./app');

const server = awsServerlessExpress.createServer(syncApp);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};