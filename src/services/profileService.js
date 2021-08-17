import API from "./API";
import { setAPIHeader } from "./authService";

export const getUserProfile = () => {
  setAPIHeader();
  return API.post("/getProfile");
};
