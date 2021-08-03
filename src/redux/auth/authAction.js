import { SAVE_USER_INFO } from "./authTypes";

export const saveUser = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_USER_INFO,
    data,
  });
};
