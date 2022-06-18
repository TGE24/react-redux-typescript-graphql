import { api } from "../apiBase";
import {
  ExampleQueryDocument,
  ExampleQueryQuery,
  ExampleQueryQueryVariables,
} from "../generated/graphql";

export const exampleQueryAPIs = api.injectEndpoints({
  endpoints: (build) => ({
    getExampleQuery: build.query<
      ExampleQueryQuery,
      ExampleQueryQueryVariables | void
    >({
      query: (variables) => ({ document: ExampleQueryDocument, variables }),
    }),
  }),
});

export const { useGetExampleQueryQuery, useLazyGetExampleQueryQuery } =
  exampleQueryAPIs;
