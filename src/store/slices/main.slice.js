import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    resetStore: (state, action) => {
      state = {};
      return state;
    },
  },
});

export const { resetStore } = mainSlice.actions;

export default mainSlice.reducer;
