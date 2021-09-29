import API from "./API";

export const getSellerReviews = async () => {
  const seller_id = localStorage.getItem("seller_id");
  if (seller_id) return API.post("/getSellerReviews", { seller_id });
};

export const getItemReviews = async (item_id) => {
  if (item_id)
    return API.post("/getItemReviews", { item_id });
};

export const addItemReview = async (values) => {
  // export const addItemReview = async ({ item_id, review, rating }) => {
  // if (item_id)
  console.log(values);
  return API.post("/addItemReview", values);
};

export const getItemComments = async (item_id) => {
  if (item_id)
    return API.post("/getItemComments", { item_id });
};


