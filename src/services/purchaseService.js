import API from "./API";

export const getPurchasedItems = async (values) => {
  return API.post("/getPurchases", values);
};

export const checkout = function (values) {
  return API.post("/makePurchase", values);
};

export const completePayment = function (values) {
  return API.post("/completePayment", values);
};

export const getDownloadUrl = function (values) {
  return API.post("/getDownloadUrl", values);
};

export const getStatement = function (values) {
  return API.post("/getStatement", values);
};
