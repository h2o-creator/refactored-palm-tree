# refactored-palm-tree

Would You Rather web game code-named as refactored-palm-tree created with Create-React-App, React (obviously) and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Visuals

![Refactored Palm Tree Preview](./preview/project-refactored-palm-tree-preview)

## Specifications

- Follows the specifications of the Udacity Rubric (Would You Rather?)
- Responsive layout - provides the same experience cross-device
- Free from warnings and errors
- State managed completely using Redux
- Built using react and initiated using Create-React-App
- Consists of connected components, presentational components, actions and reducers
- The default API shipped with the project was modified to create custom avatars and to meet with the system feature demands
    i.e. Password and Avatars

## Dependencies

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "bootstrap": "^5.1.3",
    "randomcolor": "^0.6.2",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-redux-loading-bar": "^5.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "^3.4.4",
    "redux": "^4.1.1",
    "redux-thunk": "^2.4.0",
    "spark-md5": "^3.0.2",
    "squareicon": "^1.0.3",
    "web-vitals": "^1.0.1"
  },
```

## Copyright & License

(C) 2021 Abdelhady Salah Abdelkader. All Rights Reserved.
Licensed under GNU GPL v3

## Features Overview

- User system
    - Users can login
    - Certain pages require being logged in to access
    - Logged in users can create users, access the leaderboard, create and access polls
    - Users have auto-generated avatars based on ther id
- Polls system
    - All the polls have the same question: Would You Rather?
    - Polls have two options only that users can choose from
    - Users can ask questions and others are able to answer them (following the rules of the game)
    - Users who have voted are able to view poll results
    - Users MUST un-vote before they can vote for the other option
    - Answered questions are separated from unanswered (unanswered are preferred)
    - Each user has his own version of the answered/unanswered lists
- Leaderboard
    - Top 4 users are displayed on the list
    - Trophies are given to top users (have different color and icon type)
    - Score is calculated according to: How many questions asked + answered 
    - Answered questions in the leaderboard refer to questions that have received at least 1 answer

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
