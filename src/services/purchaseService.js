import API from "./API";

export const getPurchasedItems = async () => {
  return API.post("/getPurchases");
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

export const getStatement = function () {
  return API.post("/getStatement");
};
