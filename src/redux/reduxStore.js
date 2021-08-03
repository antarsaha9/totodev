import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const createStore = () => reduxStore;

// Create redux wrapper for next.js
export const reduxWrapper = createWrapper(createStore);

export default reduxStore;
