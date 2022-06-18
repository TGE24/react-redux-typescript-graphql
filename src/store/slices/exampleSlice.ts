import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExampleQueryQuery } from "../../graphql/generated/graphql";

interface ExampleStoreType {
  data: ExampleQueryQuery | undefined;
}

const initialState: ExampleStoreType = {
  data: {},
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    storeExampleData: (
      state,
      action: PayloadAction<ExampleQueryQuery | undefined>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { storeExampleData } = exampleSlice.actions;
export default exampleSlice.reducer;
