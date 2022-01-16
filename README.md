# DPS Rescue webapp frontend

## Quick Start

### Production
`npm run build` Builds the app for production to the `build` folder.

### Development
`npm start` Runs the app in the development mode and serves it at [http://localhost:3000](http://localhost:3000).

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the absence of formal requirements, most of the functionality is documented in the components themselves.
Since there is little to no actual business logic, almost everything there is to know about the workings of the application can be discovered by simply following [routes](src/routing/routes.tsx) to their components.

Most pages are simply static content (e.g. the [cat application](src/adopt/cat-application/DpsCatApplication.tsx)) or renders of a single request to the API (e.g. the [available page](src/adopt/available/DpsAdoptAvailable.tsx)).

### Dependencies
The most used dependencies are React, React Router, TypeScript, `react-micromodal` (a React skin on top of Micromodal), `react-slick` (a React skin on top of Slick carousel), and `bootstrap-grid-only` for simple layout styles.

### Quirks
Almost every route can be easily found by looking at the navbar and submenus that pop up, with the following exceptions:
- The dog and cat applications have friendlier, user-facing routes that appear in the nav but the buttons that go to the actual Google Forms applications go to separate routes that simply redirect to the Forms. This makes for nicer links that can be shared with the public and, in the event the Form changes, one place where it can be changed.
- While not technically a separate route, adding `print=true` as a query param to the `pet-detail` route changes the DOM and adds some `@media print` styling that makes printing pet bios for adoption events easier for volunteers.

Some parent routes have no content and exist purely to namespace child routes.
Therefore, ideally, they would not be accessible without the context of a child route, except to my knowledge React Router doesn't easily support abstract routes like this.
Index routes are used to mimic this sort of behavior by acting as a sort of default child route when a parent route is visited directly.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Given the relatively simple nature of the application, there are no tests at the moment.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
