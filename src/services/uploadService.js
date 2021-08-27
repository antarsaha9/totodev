import axios from "axios";
import API from "./API";

export const getUploadUrl = (
  { name: objectName, type: contentType },
  uploadFor = "profile_image"
) => {
  return API.post("/getUploadUrl", { objectName, contentType, uploadFor });
};

export const uploadFile = (url, file, setProgress) => {
  let config = {};

  if (setProgress) {
    config = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );

        if (setProgress) setProgress(percentCompleted);
      },
    };
  }

  return axios.put(url, file, config);
};
