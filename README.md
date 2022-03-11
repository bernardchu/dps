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

The second data source is a [Goodle Spreadsheet](https://docs.google.com/spreadsheets/d/1tismwQONGusoCzAC4cCuPVHTSMdV9hSvkTNDbCiVDKw/edit); get permission to edit if you haven't already.
This sheet is used as a surrogate database for many views.
These are synced manually as changes to these sheets occur relatively infrequently.

### Images
We use [Imgix](https://docs.imgix.com/) to manage the vast majority of our images.
We serve many images that we don't control (e.g. the adoptable animals) and their API simplifies the challenge of consistency across images.
Ensure that all image URLs use https when filling out the Google Sheet.