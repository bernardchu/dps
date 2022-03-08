# DPS Website Deployment
## Frontend
Hook up the relevant branch to Amplify and it will set up continuous deployment.

Since we use `react-router`, to make proper use of HTML5 pushState, follow the directions [here](https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html#redirects-for-single-page-web-apps-spa) to ensure that direct links work correctly (this setting is in the Amplify console, left side menu, under "Rewrites and redirects").

DNS for the frontend can be set up by following the instructions for [adding custom domains in the Amplify docs](https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-amazon-route-53.html).

## Backend
Deploys automatically with `amplify push`.
DNS for API can be set up by following the instructions for [routing traffic for an Amazon API Gateway API](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html).