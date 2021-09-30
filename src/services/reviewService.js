import API from "./API";

export const getMyReviews = async () => {
  const seller_id = localStorage.getItem("seller_id");
  if (seller_id) return API.post("/getSellerReviews", { seller_id });
};

export const getSellerReviews = async (seller_id) => {
  if (seller_id) return API.post("/getSellerReviews", { seller_id });
};

export const addSellerReview = async (values) => {
  return API.post("/addSellerReview", values);
};

export const getItemReviews = async (item_id) => {
  if (item_id)
    return API.post("/getItemReviews", { item_id });
};

export const addItemReview = async (values) => {
  // export const addItemReview = async ({ item_id, review, rating }) => {
  // if (item_id)
  return API.post("/addItemReview", values);
};

export const getItemComments = async (item_id) => {
  if (item_id)
    return API.post("/getItemComments", { item_id });
};


