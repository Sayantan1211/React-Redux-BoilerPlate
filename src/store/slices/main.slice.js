import { createSlice } from "@reduxjs/toolkit";

const initial = {};

const mainSlice = createSlice({
  name: "main",
  initial,
  reducers: {
    resetStore: (state, action) => {
      state = {};
      return state;
    },
  },
});

export const { resetStore } = mainSlice.actions;

export default mainSlice.reducer;
