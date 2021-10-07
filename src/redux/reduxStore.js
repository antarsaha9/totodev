import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice, { authReducer } from "./authSlice";
import appSlice, { appReducer } from "./appSlice";

const reduxStore = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
    [appSlice.name]: appReducer,
  },
  devTools: true,
});

const createStore = () => reduxStore;

// Create redux wrapper for next.js
export const reduxWrapper = createWrapper(createStore);

export default reduxStore;
