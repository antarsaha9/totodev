import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: null,
    user: null,
    loading: true,
  },

  reducers: {
    saveUserInfo: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice;
