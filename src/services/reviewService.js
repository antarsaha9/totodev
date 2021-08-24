import API from "./API";

export const getSellerReviews = async () => {
  const seller_id = localStorage.getItem("seller_id");
  if (seller_id) return API.post("/getSellerReviews", { seller_id });
};
