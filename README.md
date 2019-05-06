# Boomtown 🏙

Boomtown is a fully functional web-based application to support a local sharing economy. It was built using React, Redux, and Graphql. Boomtown allows users to share their items and allows them to borrow from other users.

## Getting Started

- Download or clone git repo. Run
- clients/npm install && npm start
- server/npm install && npm run start:dev

### Prerequisites

You will need a Postgres server with the content matching the config files in Server. This repo may be updated to include this in the future.

- app.set('Port_HOST', process.env.PG_HOST || 'localhost');
- app.set('PG_USER', process.env.PG_USER || 'boomtown');
- app.set('PG_PASSWORD', process.env.PG_PASSWORD || '\*\*\*\* YOUR PASSWORD');
- app.set('PG_DB', process.env.PG_DB || ‘boomtown’);
- app.set('PGPORT' , process.env.PGPORT || '8080');

## Installing

- Install client / server npm packages.
- Install / create Boomtown Postgres server.
- Run npm start in both client / server folders.
- Open localhost:3000 Sign in.

## Built With:

- React
- Redux
- Node.js
- Apollo Server
- Postgres
- Firebase
- GraphQL
- Material-ui

## Personal learning:

- Learned about building an app with both client-side and server-side.
- Learned about higher order components, components, storing initial states, props, dispatching actions and reducers.
- Applied best practices when making decisions about what logic to implement on client-side versus server-side..
- Learned how to authenticate a user using Firebase tokens.
- Learned how to write resolver functions, data schemas and make queries for data and using GraphiQL to test the queries.
- Learned how to protect routes when user is not in an authenticated state.

**Contributors:**
Saveen Toor

### Screenshot

![alt text](/homepage.png)
![alt text](/itemspage.png)