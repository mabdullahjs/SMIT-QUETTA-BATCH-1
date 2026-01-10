import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})