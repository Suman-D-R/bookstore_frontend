import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import bookSlice from "./bookSlice";
import wishSlice from "./wishSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    book: bookSlice,
    wish: wishSlice
  },
});

export default appStore;
