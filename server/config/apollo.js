const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const jwt = require ('jsonwebtoken');
const { AuthDirective } = require('../api/custom-directives');

const typeDefs = require('../api/schema');
let resolvers = require('../api/resolvers');

module.exports = ({ app, pgResource }) => {
  resolvers = resolvers(app);

  const schema = makeExecutableSchema({
     typeDefs, 
     resolvers, 
     schemaDirectives: {
     auth: AuthDirective
  } 
});

  const apolloServer = new ApolloServer({
    context: ({ req }) => {
      // @TODO: Uncomment this later when we add auth (to be added to Apollo's context)
      const tokenName = app.get("JWT_COOKIE_NAME")
      const encodedtoken = req ? req.cookies[tokenName] : undefined
      const token = encodedtoken 
      ? jwt.decode(encodedtoken, app.get("JWT_SECRET")) 
      : undefined;

     console.log(req.cookies);

      return {
        /**
         * @TODO: Provide Apollo context
         *
         * When initializing Apollo, we can provide a context object which will be
         * passed to each resolver function. This is useful because there are a
         * number of things we'll need to access in every resolver function.
         *
         * Above we can see that we are capturing the cookie from the request object,
         * and retrieving the token. This is important for authentication.
         *
         * Refactor this code and supply any additional information (values, methods, objects...etc)
         * you'll need to use in your resolving functions.
         */
        req,
        token,//makes it available to all out servers 
        pgResource // is an object that returns methods
      };
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get('CORS_CONFIG')
   
  });
};
