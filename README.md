# DPS Website
[Frontend](./Frontend.md)
[Deployment](./Deployment.md)
[Backend](./Backend.md)

## Dependencies
- `npm` (developed using 8.1.0) and `node` (developed using 16.13.0)
- An AWS account
- [amplify](https://docs.amplify.aws/cli/start/install/) annoyingly [must be installed globally](https://github.com/aws-amplify/amplify-cli/issues/4491)

## Overview
We use AWS Amplify mostly for ease of deployment and because AWS provides credits for nonprofits.

### Data
There are two main sources of data.

The first is [Rescue Groups](https://rescuegroups.org/) which provides data on the animals.
DPS uses their interface to CRUD animals, and our goal here is simply to ensure that we display their data correctly.
They have a relatively new, "modern" [API](https://userguide.rescuegroups.org/display/APIDG/v5) that we would love to use except it has an unacceptable lag between CUD and R.
We unfortunately have to jump through some significant hoops to use older but more accurate endpoints.
We sync data between Rescue Groups and our own database on a frequent basis and serve the DPS site's data from our own database.

The second data source is a [Goodle Spreadsheet](https://docs.google.com/spreadsheets/d/1tismwQONGusoCzAC4cCuPVHTSMdV9hSvkTNDbCiVDKw/edit); get permission to edit if you haven't already. This sheet is used as a surrogate database for many views. These are synced manually as changes to these sheets occur relatively infrequently.

To sync everything but success stories use:
* https://api.dpsrescue.com/sheets/sync (prod)
* https://api.dpsrescue.info/sheets/sync (dev)

To sync success stories use:
* https://api.dpsrescue.com/sheets/success/sync (prod)
* https://api.dpsrescue.info/sheets/success/sync (dev)

To sync from Rescue Groups use:
* https://api.dpsrescue.com/available/sync (prod)
* https://api.dpsrescue.info/available/sync (dev)

To check animals use:
* https://api.dpsrescue.com/available/all (prod)
* https://api.dpsrescue.info/available/all (dev)

## Development Process

### Environments
Frontend changes will automatically deploy to amplify once the code is merged into the appropriate branch. Backend changes need to be pushed with `amplify push` from a terminal.

#### Production
There are two amplify apps, one for the [frontend](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d2nmfhy26u2704) and one for the [backend](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/dc11q6d25hrn6), for dumb reasons.

You can acess prod frontend by hitting dpsrescue.com, dpsrescue.org, www.dpsrescue.com, or www.dpsrescue.org. All of those variants use the same backend url, api.dpsrescue.com.

#### Testing
There is one amplify app for testing, called [dev](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d2v14q8bsmsp6v). 

You can access the dev frontend by hitting dpsrescue.info and the backend is currently configured to hit api.dpsrescue.info.

## Git Workflow
1. Create a feature branch
1. Get the feature branch locally `git pull; git checkout <branch-name>`
1. To deploy the backend to dev, run `npm run ts:backend; amplify push`.
1. To deploy the frontend to dev, force push the branch to `amp`: `git push -f origin <branch-main>:amp`. Amplify will detect the change and automatically push a new build.
1. Once you are happy with your changes, create a PR from `<branch-name>` to `main`. Merge the PR. This will automatically deploy the frontend.
1. If you also have backend changes that need to be deployed, make sure your local repo is up to date with `main` and do `npm run ts:backend; amplify push`

### Images
We use [imgix](https://docs.imgix.com/) to manage the vast majority of our images.
We serve many images that we don't control (e.g. the adoptable animals) and their API simplifies the challenge of consistency across images.
Ensure that all image URLs use https when filling out the Google Sheet.

To add a new image, upload them into our [S3 Bucket](https://s3.console.aws.amazon.com/s3/buckets/dpsrescue?region=us-east-1&tab=objects#). They are organized by website section.
