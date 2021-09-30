import API from "./API";
import { setAPIHeader } from "./authService";
import { getUploadUrl, uploadFile } from "./uploadService";

export const getMyProfile = (idToken) => {
  setAPIHeader(idToken);
  return API.post("/getMyProfile");
};

export const updateProfile = async (values, setProgress) => {
  setAPIHeader();

  if (values.img) {
    const { url: uploadUrl } = await getUploadUrl(values.img);

    await uploadFile(uploadUrl, values.img, setProgress);

    const temp = new URL(uploadUrl);
    values.image_url = `http://${temp.host}${temp.pathname}`;
  }

  return API.post("/updateProfile", values);
};

export const getSellerProfile = (member_id) => {
  return API.post("/getProfile", { member_id });
};