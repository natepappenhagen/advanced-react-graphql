/*
 * @Author: Nate
 * @Date:   2019-01-12 12:31:12
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-12 12:37:38
 */

// this connects to the remote prisma DB and gives us the ability to query it w/ JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
