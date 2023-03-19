import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./actions";
import uiSlice from "./Ui-slice";
import invoiceSlice from "./invoice-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    action: actionSlice.reducer,
    invoiceReducer: invoiceSlice.reducer,
  },
});
export default store;
