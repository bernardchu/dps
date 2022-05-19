# DPS Rescue webapp frontend

## Quick Start

### Production
`npm run build` Builds the app for production to the `.next` folder.

### Development
Set an env variable `NEXT_PUBLIC_API_URL` to whatever API you want to use e.g. `http://api.dpsrescue.info` in a `.env.local` file.
`npm run dev` Runs the app in the development mode and serves it at [http://localhost:3000](http://localhost:3000).

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) then migrated to use Next.js.

In the absence of formal requirements, most of the functionality is documented in the components themselves.
Since there is little to no actual business logic, almost everything there is to know about the workings of the application can be discovered by simply following [routes](src/routing/routes.tsx) to their components and by examining the available pages in the `pages` folder.

Most pages are simply static content (e.g. the [cat application](src/adopt/cat-application/DpsCatApplication.tsx)) or renders of a single request to the API (e.g. the [available page](src/adopt/available/DpsAdoptAvailable.tsx)).

### Dependencies
The most used dependencies are React, Next.js, TypeScript, `react-modal`, `react-slick` (a React wrapper around Slick carousel), and `bootstrap-grid-only` for simple layout styles.

### Quirks
Almost every page can be easily found by looking at the navbar and submenus that pop up, with the following exceptions:
- The dog and cat applications have friendlier, user-facing pages that appear in the nav but the buttons that go to the actual Google Forms applications go to separate pages that simply redirect to the Forms. This makes for nicer links that can be shared with the public and, in the event the Form changes, one place where it can be changed.
- While not technically a separate page, adding `print=true` as a query param to the `pet-detail` page changes the DOM and adds some `@media print` styling that makes printing pet bios for adoption events easier for volunteers.
- The `/print` page gives links to the above for each adoptable animal.
- The `/rehome` page is identical to `/adopt/rehome` and exists because some people have this bookmarked.

Most parent routes, e.g. `/adopt`, have no content and exist purely to namespace child routes.

### Environment variables
Environment variables are set in a `.env.local` file.
Set `NEXT_PUBLIC_API_URL` to whatever API you want to use e.g. `http://api.dpsrescue.info`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Given the relatively simple nature of the application, there are no tests at the moment.

### `npm run build`

Builds the app for production to the `.next` folder.\
This is usually not needed locally; amplify runs this command to build the app.

### `npm run start`
Serves up whatever is in the `.next` folder at [http://localhost:3000](http://localhost:3000).
This is generally not needed(`npm run dev` should suffice for most development), but can be helpful to double-check larger changes before deployment.

## Learn More
To learn React, check out the [React documentation](https://reactjs.org/).

To learn Next.js, check out the [Next.js documentation](https://nextjs.org/docs/getting-started).
