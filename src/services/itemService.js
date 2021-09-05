import {
  getUploadUrl,
  uploadFile,
  uploadLargePrivateFile,
} from "~services/uploadService";
import API from "./API";

export const addSellerItem = async ({ img, file, ...values }, setProgress) => {
  values.tags = values.tags.split(",").filter((tag) => !!tag.trim());

  const { url: uploadUrl } = await getUploadUrl(img);

  const p1 = uploadLargePrivateFile(file, setProgress);
  const p2 = uploadFile(uploadUrl, img);

  const [data] = await Promise.all([p1, p2]);
  values.file_url = data?.file_url;

  const temp = new URL(uploadUrl);
  values.image_url = `http://${temp.host}${temp.pathname}`;

  console.log(data, values);
  return API.post("/addASellerItem", values);
};
