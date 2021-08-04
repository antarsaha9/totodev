import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice, { authReducer } from "./authSlice";

const reduxStore = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
  },
  devTools: true,
});

const createStore = () => reduxStore;

// Create redux wrapper for next.js
export const reduxWrapper = createWrapper(createStore);

export default reduxStore;
