# DPS Website Backend
## Overview
The backend was generated using AWS Amplify.
The high-level goal is to sync three database tables with data in RescueGroups and Google Sheets and serve that data via HTTP.
Conventional CUD operations are not present; tables are wiped and repopulated with the latest data.
For simplicity, all requests are GET requests.
This allows for a convenient (can be easily done entirely on a mobile device) workflow where, for example, if an update needs to be made to the list of upcoming adoption events, it's simple to just update the relevant Google Sheet and then use a browser to GET the relevant sheets sync endpoint rather than having to update any code.
Furthermore, because the only CUD operations that occur sync the latest data, issues of data integrity and security become trivial.

## Database
We use DynamoDB for easy integration with Amplify.
Since we do a fair amount of syncing, i.e. delete all old data and replace with new, dropping and recreating tables during these operations seems like a reasonable strategy to employ.
While this is feasible using a SQL database, DynamoDB has a lag for these operations that makes it impractical.
Thus, we instead delete all items using Batch operations before adding new ones.
The [Deployment](./Deployment#database-tables) doc contains more info about which tables should be added.

DynamoDB current provision levels are best guesses. You will need to keep an eye on the monitoring to make sure provision values are not being exceeded.

## Lambdas
...are present in `amplify/backend/function`.
See `app.ts` in each function's `src` directory for more info.
There is some duplicated code that is not ideal, but sharing that code in a lambda layer [removes support](https://github.com/aws-amplify/amplify-cli/issues/9849) for `amplify mock ...` so for now that tradeoff is probably not worth it.

### TypeScript
Amplify does not use TypeScript by default, but I prefer it so I added it.
To compile TS for all the backend lambdas, use `npm run ts:backend` from [package.json](./package.json) (use `npm run install:backend` to install TypeScript everywhere first, if you haven't).

If you add a new lambda via `amplify update api`, you can TypeScript-ify it by copying over one of the existing `tsconfig.json` files and adding the following npm `scripts` to `package.json`:
```
"scripts": {
  "amplify:generateGetSheets": "npm run ts",
  "ts": "cd .. && tsc -p ./tsconfig.json && cd -"
},
```
(replace `GetSheets` above with the name of the new lambda)

### EventBridge
To ensure the available animals are getting sync'd regularly, we use EventBridge to call the available/sync endpoint every 5 minutes. It is very important to note that you must set the EventBridge retries to be 1 or more. Setting it to 0 will use the default 185 retries and this is stupid.

### Local development
To run a lambda function locally:
`npm run ts && amplify mock function <lambda name> --event path/to/event.json`, e.g.
`npm run ts && amplify mock function syncAvailable --event src/testEvent.json`
Relevent test event JSON files are present within the `src` directories of each lambda, though IDs might need to be updated for certain events such as getting an available animal by ID.
The above has been condensed into `npm run mock:<something>` scripts for each lambda.
Unfortunately there seems to be no way to debug within an IDE when running lambdas locally.
It may be possible to do some better debugging when running test events through the AWS Lambda web interface but I haven't tried much.

### Adding new
If the new lambda is meant to handle a new API endpoint, use `amplify update api` and add a lambda there, which will properly update settings for exposed routes on the API gateway.
Otherwise `amplify add function` may suffice.
Depending on what permissions you want your lambda to have, use `amplify update function` to set them properly before pushing to minimize chances of errors once pushed.

## Google Sheets
One-time setup: Follow these instructions to create a [Service Account](https://robocorp.com/docs/development-guide/google-sheets/interacting-with-google-sheets). Once you've created a key, make sure you give the new Service Account email access to the Google Sheet. Then, download the key as JSON and upload that value into the AWS Parameter Store `dpsGoogleSheetCredentials`.

## Endpoints (all GET)
TODO: would be better as swagger, maybe.
| Path                      | Functionality                                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------|
| /available/sync           | Fetches data from RescueGroups, empties contents of `available` table, and repopulates it with new data |
| /available/all            | Returns an abbreviated view of all available animals.                                                   |
| /available/object/:id     | Returns a detailed view of one animal                                                                   |
| /sheets/dates             | Returns all upcoming adoption events                                                                    |
| /sheets/featured          | Returns all featured items for the news feed on the main page.                                          |
| /sheets/fosters           | Returns all fosters.                                                                                    |
| /sheets/icu               | Returns all ICU animals.                                                                                |
| /sheets/newsletters       | Returns all newsletters                                                                                 |
| /sheets/volunteers        | Returns all volunteers.                                                                                 |
| /sheets/sticky            | Should return all sticky dogs but will probably be deprecated so just returns [] for now.               |
| /sheets/success/all       | Returns an abbreviated view of all success stories.                                                     |
| /sheets/success/object:id | Returns a detailed view of one success story.                                                           |
| /sheets/success/sync      | Syncs the success stories sheet with the successStories database table.                                 |
| /sheets/sync              | Syncs all sheets except the success stories sheet.                                                      |
| /application/dog          | Returns next coming adoption event info with names of available dogs (used by adoption form)            |
| /application/cat          | Returns next coming adoption event info with names of available cats (used by adoption form)            |

## Tests
Most of the functionality is just moving data around from one place to another so it isn't tested.
However the syncSheets code that parses the strange JavaScript-like API response is thoroughly tested.
Tests are run as part of the `generateSyncSheets` script to ensure CI; any new tests that are added to other lambdas should be run during their corresponding `generate` npm scripts as well.

## Common development pitfalls
The most common error is probably a 500 when testing out a lambda (that was working fine during development) on a deployment.
These are usually the result of the IAM user that executes the lambda not having sufficient correct permissions.
Generally the error message in the CloudWatch logs will point in the right direction.
