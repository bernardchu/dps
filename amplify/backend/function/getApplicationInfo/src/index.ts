const awsServerlessExpress = require('aws-serverless-express');
const a = require('./app');

const server = awsServerlessExpress.createServer(a);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
