import { HYDRATE } from "next-redux-wrapper";
import { SAVE_TOKEN, SAVE_USER_INFO, SIGN_OUT } from "./authTypes";

const initialState = {
  token: null,
  user: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload?.auth,
      };
    }
    case SAVE_TOKEN: {
      localStorage.setItem("token", JSON.stringify(action.data));
      return { ...state, token: action.data };
    }
    case SAVE_USER_INFO: {
      return { ...state, user: action.data, loading: false };
    }
    case SIGN_OUT: {
      return initialState;
    }
    default: {
      return { ...state };
    }
  }
};

export default authReducer;
