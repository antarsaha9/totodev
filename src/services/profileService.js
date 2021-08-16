import API from "./API";

export const getUserProfile = async () => {
  return API.post("/getProfile");
};
