import API from "./API";
import { setAPIHeader } from "./authService";

export const getMyProfile = (idToken) => {
  setAPIHeader(idToken);
  return API.post("/getMyProfile");
};

export const updateProfile = (data) => {
  setAPIHeader();
  return API.post("/updateProfile", data);
};
