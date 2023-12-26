import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import bookSlice from "./bookSlice";
import wishSlice from "./wishSlice";
import orderSlice from './orderSlice';

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    book: bookSlice,
    wish: wishSlice,
    order: orderSlice
  },
});

export default appStore;
