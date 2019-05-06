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
      const tokenName = app.get("JWT_COOKIE_NAME")
      const encodedtoken = req ? req.cookies[tokenName] : undefined
      const token = encodedtoken 
      ? jwt.decode(encodedtoken, app.get("JWT_SECRET")) 
      : undefined;



      return {
        req,
        token,
        pgResource 
      };
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get('CORS_CONFIG')
   
  });
};
