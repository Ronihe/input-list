# Silly Strings

Silly Strings is a full stack application built for a take home challenge.

This project was built with
[react-boilerplate](https://www.reactboilerplate.com), PostgreSQL,&nbsp;❤️ &nbsp;and &nbsp;☕️&nbsp;. The front-end uses React, React-Router, Redux, Redux-Saga, Reselect, ImmutableJS and StyledComponents. The backend uses Node/Express.

## Features 🐛

- 👍🏼 &nbsp;Expands on the [production-ready](https://github.com/react-boilerplate/react-boilerplate#quick-start) out of the box design of react-boilerplate and adheres to best practice structure and modularization for both backend route handlers and frontend components and containers.

- 🚥 &nbsp;Sign Up and Authentication Flow.

- 🐛 &nbsp;26 tests written and 92% test coverage for the AppContainer.

## Installation

### Requirements

- Node v8.11, npm
- PostgreSQL

After cloning the repo, seed your database with the seed file, install the node modules and start the development server. Server will be started at `localhost:3000`. The api is attached to the development server at the /api route. Authentication is handled at the /auth route.

```js
$ psql < server/db_schema.sql
$ npm install
$ npm start
```

## To Do

- More rigorous validation of forms on both the frontend and backend

- Finish unit and component tests for the SignUpForm, LoginForm, and NewMessageForm container

- Refactor the AppContainer and its actions/reducers/sagas into a separate container / more appropriately named container.

- Authentication would ideally persist on refresh, redirect users from /messages routes if unauthorized.

## License

[MIT](https://choosealicense.com/licenses/mit/)






1. generators: 
    does not do run-to-completion behavior
    
2. 
// function* foo() { .. }