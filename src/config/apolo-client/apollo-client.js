import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: "wss://mountindo.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "d7D6NlnfA6Ae36xt6cnJDlRfTAezk2j3ZJhARRaQyE5P7ufWF3cYk5XsPjzxJbb5",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://mountindo.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "d7D6NlnfA6Ae36xt6cnJDlRfTAezk2j3ZJhARRaQyE5P7ufWF3cYk5XsPjzxJbb5",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
