import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

const API_URL = process.env.REACT_APP_BASE_URL;

export const client = new GraphQLClient(
  API_URL ?? ""
  // {
  // //   API headers can go in here
  // }
);

// INFO initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}), // ! This should remain empty!
});
