import API from "./API";

export const getPurchasedItems = async () => {
  const member_id = localStorage.getItem("seller_id");
  if (member_id) return API.post("/getPurchases", { member_id });
};

export const checkout = function (values) {
  const member_id = localStorage.getItem("seller_id");
  if (member_id) return API.post("/makePurchase", values);
};

export const completePayment = function (values) {
  const member_id = localStorage.getItem("seller_id");
  if (member_id) return API.post("/completePayment", values);
};


