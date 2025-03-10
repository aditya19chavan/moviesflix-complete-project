import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
      getSearchQuery: (state,action) => {
          console.log(action.payload);
          state.value = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { getSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
