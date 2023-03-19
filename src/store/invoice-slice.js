import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async (arg, { dispatch }) => {
    const res = await axios.get(`${window.domain}invoice`);
    console.log(res);
    return res.data;
  }
);

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: { data: [], isLoading: false },
  extraReducers: {
    [getInvoices.pending]: (state, action) => {
      state.data = [];
      state.isLoading = true;
    },
    [getInvoices.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [getInvoices.rejected]: (state, action) => {
      state.data = [];
      state.isLoading = false;
    },
  },
});

export default invoiceSlice;
