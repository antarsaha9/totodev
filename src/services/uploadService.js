import axios from "axios";
import API from "./API";

export const getUploadUrl = (
  { name: objectName, type: contentType },
  uploadFor = "profile_image"
) => {
  return API.post("/getUploadUrl", { objectName, contentType, uploadFor });
};

export const uploadFile = (url, file) => {
  return axios.put(url, file);
};
