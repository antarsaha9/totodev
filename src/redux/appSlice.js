import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const appSlice = createSlice({
  name: "app",

  initialState: {
    cart: null,
    profile: null,
  },

  reducers: {
    setCart: (state, action) => {
      return {
        ...state,
        cart: action.payload,
      };
    },
    setProfile: (state, action) => {
      return {
        ...state,
        profile: action.payload,
      };
    },
  },

  //   extraReducers: {
  //     [HYDRATE]: (state, action) => {
  //       return {
  //         ...state,
  //         ...action.payload.auth,
  //       };
  //     },
  //   },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

export default appSlice;
