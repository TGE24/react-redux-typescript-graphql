import { combineReducers } from "redux";
import { api } from "../graphql/apiBase";
import exampleReducer from "./slices/exampleSlice";

export default combineReducers({
  example: exampleReducer,
  [api.reducerPath]: api.reducer,
});
