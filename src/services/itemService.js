import {
  getUploadUrl,
  uploadFile,
  uploadLargePrivateFile,
} from "~services/uploadService";
import API from "./API";
import { setAPIHeader } from "./authService";

export const addSellerItem = async ({ img, file, ...values }, setProgress) => {
  values.tags = values.tags.split(",").filter((tag) => !!tag.trim());
  var promises = [];
  if (img) {
    const { url: uploadUrl, access_url } = await getUploadUrl(img);
    const p1 = uploadFile(uploadUrl, img);
    promises.push(p1);
    p1.then(() => {
      values.image_url = access_url;
    })
  }

  if (file) {
    const p2 = uploadLargePrivateFile(file, setProgress);
    promises.push(p2);
    p2.then(({ file_url }) => {
      values.file_url = file_url;
    })
  }

  if (promises.length)
    await Promise.all(promises);

  return API.post("/addASellerItem", values);
};

export const getSellerItemList = async (seller_id) => {
  return API.post("/getSellerItems", { seller_id });
};

export const getMyItems = async () => {
  const seller_id = localStorage.getItem("seller_id");
  return API.post("/getSellerItems", { seller_id });
};

export const getMyItemList = async () => {
  setAPIHeader();
  return API.post("/getMyItems");
};

export const getMyItem = async (item_id) => {
  setAPIHeader();
  return API.post("/getMyItem", { item_id });
};

export const updateSellerItem = async (
  { img, file, id: item_id, ...values },
  setProgress
) => {
  setAPIHeader();
  values.tags = values.tags.split(",").filter((tag) => !!tag.trim());

  if (img) {
    const { url: uploadUrl, access_url } = await getUploadUrl(img);
    await uploadFile(uploadUrl, img);

    values.image_url = access_url;
  }

  if (file) {
    const data = await uploadLargePrivateFile(file, setProgress);
    values.file_url = data?.file_url;
  }

  return API.post("/updateSellerItem", { item_id, ...values });
};

export const updateItemStatus = async (item_id, status) => {
  setAPIHeader();
  return API.post("/updateItemStatus", { item_id, status });
};

export const getItemDetails = async (item_id) => {
  return API.post("/getAnItem", { item_id });
};

export const getAdList = async (values) => {
  return API.post("/getAdList", values);
};
