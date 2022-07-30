import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    formIsVisible: false,
  },
  reducers: {
    toggleForm(state) {
      state.formIsVisible = !state.formIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
