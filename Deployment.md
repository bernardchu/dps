# DPS Website Deployment
Everything is currently deployed in AWS us-east-1.

## Frontend
Hook up the relevant branch to Amplify and it will set up continuous deployment.
Set build settings using [the example build yaml file](./amplify-build.yml).
In the AWS Amplify console, under App Settings, set an Environment Variable API_URL that points to the desired API base URL for this deployment, e.g. http://api.dpsrescue.link/.
It's not clear why, but the default address that amplify will provide for you may not work (some DNS issues perhaps) but using a custom domain should (see below).

DNS for the frontend can be set up by following the instructions for [adding custom domains in the Amplify docs](https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-amazon-route-53.html).

Since we use `react-router`, to make proper use of HTML5 pushState, follow the directions [here](https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html#redirects-for-single-page-web-apps-spa) to ensure that direct links work correctly (this setting is in the Amplify console, left side menu, under "Rewrites and redirects").

You can point the frontend at different backends by setting the Environment Variable on the app, e.g. `API_URL` => `https://api.dpsrescue.com/`.

## Backend
Deploys automatically with `amplify push`.
When checking out someone else's feature branch that includes significant changes to the backend e.g. new lambdas, `amplify env checkout <your current env>` should make `amplify status` correctly reflect those changes.
However, this simply bundles your local code and deploys it (there is no cloud build step) so be sure that TypeScript is compiled before pushing (use `npm run install:all && npm run ts:backend` from [package.json](./package.json) to do all of it at once).
If a deployment already exists and you want to sync your local environment to that, `amplify pull` should do the trick but I've never had to do it so I'm not sure how it works.
For a new deployment, run `amplify init`. You can ignore/fill in whatever if it asks for "secrets for functions". These do not matter. See the section on Secrets for how those get set.
Make sure you do an `amplify push` before continuing with setup instructions.
DNS for API can be set up by following the instructions for [routing traffic for an Amazon API Gateway API](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html).
This will involve creating a domain in the API Gateway, which require reqruesting a cert.
Then, you will need to configure the API mappings.

### Database tables
Amplify should automatically create the necessary tables, but double-check after initial `amplify push` of a new environment that tables named `available` (primary key "id" - string), `sheets` (primary key "name" - string), and `successStories` (primary key "id" - string) all suffixed with `-<env name>` e.g. `available-prod` exist.
Next, set read capacity and write capacity levels depending on expected load.
For dev environments, very little is needed (5 and 5 for each table should be more than enough for each table).
For production, as of 2022, 5 and 5 is sufficient for `sheets` and `successStories` and 20 read / 10 write suffices for `available`.

### Secrets
Add the following parameters to AWS Systems Manager Parameter Store. You will only need to do this the first time you're deploying to an AWS account.
- `/amplify/rescueGroupsKey` is the key needed to access most of the animal data (looks like gross JavaScript that needs parsing).
- `/amplify/rescueGroupsApiKey` is the key needed to access the data used to join YouTube video data with the rest of the animal data.
- `/amplify/imgixSecureUrlToken` is used to sign animal image URLs.
- `/amplify/dpsGoogleSheetCredentials` is the JSON generated when a service account is created in order to give the application access to the Google Sheet containing the non-animal data.

### Lambda role permissions
For each backend lambda, Amplify will create one IAM role to execute that lambda.
These roles need to be given permission to access these parameters in Systems Manager and to perform certain operations in DynamoDB.
Their names generally look like `dpsLambdaRole<some hash>-<environment name>`.
There is an existing policy in the DPS AWS account called LambdaSecrets that you can use to grant each Lambda role all the necessary permissions.
You can see the actual role used by a Lambda if you get a 500 error when attempting to test an endpoint and you view the error in CloudWatch.
Attach a policy to these roles that gives the `GetParametersByPath`, `GetParameters`, and `GetParameter` actions for `Resources`: `"arn:aws:ssm:*:<account ID>:parameter/amplify/*"`.
Example JSON:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ssm:GetParametersByPath",
                "ssm:GetParameters",
                "ssm:GetParameter"
            ],
            "Resource": "arn:aws:ssm:us-west-1:<account ID>:parameter/amplify/*"
        }
    ]
}
```
If errors persist, there may be some dynamoDB permissions that fell through the cracks (amplify should set all permissions correctly during `push`).
You may need to add more permissions depending on what operations each lambda is performing on which tables.
Alternatively, for simplicity, simply grant access to all DynamoDB operations for simplicity) either to the same policy or in a different one, though this is a more dangerous practice.

### Google API
We use the Google API to read the spreadsheet and sync data to our own databases.
[Create a service account](https://cloud.google.com/docs/authentication/production) and include the JSON as a secret (see above).
Then share the Google Sheet with the email address given in the `"client_email"` field in the JSON.
Fair warning - Google's documentation is atrocious.

### Images
There are two types of images used for DPS: 1) Static images hosted in our own S3 bucket and 2) images returned from Rescue Groups. All images are processed in real-time by using imgix. The imgix account can be accessed by using Google sign in from ops@dpsrescue.org.


