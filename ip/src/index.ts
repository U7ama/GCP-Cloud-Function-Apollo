import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { startServerAndCreateGoogleCloudFunctionsHandler } from '@as-integrations/google-cloud-functions';
import ip from "ip";

const ipAddress = ip.address();

const typeDefs = `#graphql
  type IP {
    ip: String
  }
`;

const resolvers = {
  Query: {
    ip: () => ipAddress,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
});

startServerAndCreateGoogleCloudFunctionsHandler(server, {
  functionTarget: process.env.FUNCTION_TARGET as string,
});
