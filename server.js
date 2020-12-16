const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('schema.graphql', 'utf8').then((data) => {
  const typeDefs = gql`
    ${data}
  `;

  const server = new ApolloServer({
    typeDefs,
    mocks: true,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
