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

  return API.post("/addASellerItem", values);
};

export const getSellerItemList = async (seller_id) => {
  return API.post("/getSellerItems", { seller_id });
};

export const getMyItemList = async () => {
  return API.post("/getMyItems");
};

export const getMyItem = async (item_id) => {
  return API.post("/getMyItem", { item_id });
};

export const updateSellerItem = async (
  { img, file, id: item_id, ...values },
  setProgress
) => {
  values.tags = values.tags.split(",").filter((tag) => !!tag.trim());

  if (img) {
    const { url: uploadUrl } = await getUploadUrl(img);
    await uploadFile(uploadUrl, img);

    const temp = new URL(uploadUrl);
    values.image_url = `http://${temp.host}${temp.pathname}`;
  }

  if (file) {
    const data = await uploadLargePrivateFile(file, setProgress);
    values.file_url = data?.file_url;
  }

  return API.post("/updateSellerItem", { item_id, ...values });
};

export const updateItemStatus = async (item_id, status) => {
  return API.post("/updateItemStatus", { item_id, status });
};
