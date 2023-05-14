# Apollo Server Integration for Google Cloud Functions
This Cloud Function will return ip of the user

```ts
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateGoogleCloudFunctionsHandler } from "@as-integrations/google-cloud-functions";

const resolvers = {
  Query: {
    ip: () => '2404:3100:1040:cdf7:5889:b98:eadc:cd2e',
  },
};


const typeDefs = gql`
  type Query {
    ip: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

startServerAndCreateGoogleCloudFunctionsHandler(server, { functionTarget: "apollo-graphql" });
```
