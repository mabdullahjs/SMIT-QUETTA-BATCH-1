import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice.js";
import cartReducer from "../reducers/cartSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer
  },
});
