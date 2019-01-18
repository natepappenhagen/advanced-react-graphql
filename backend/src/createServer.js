/*
 * @Author: Nate
 * @Date:   2019-01-12 12:37:10
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-12 12:37:34
 */
const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
