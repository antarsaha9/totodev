import API from "./API";
import { setAPIHeader } from "./authService";
import { getUploadUrl, uploadFile } from "./uploadService";

export const getMyProfile = () => {
  setAPIHeader();
  return API.post("/getMyProfile");
};

export const updateProfile = async (values, setProgress) => {
  setAPIHeader();

  if (values.img) {
    const { url: uploadUrl, access_url } = await getUploadUrl(values.img);

    await uploadFile(uploadUrl, values.img, setProgress);

    values.image_url = access_url;
  }

  return API.post("/updateProfile", values);
};

export const getSellerProfile = (member_id) => {
  return API.post("/getProfile", { member_id });
};