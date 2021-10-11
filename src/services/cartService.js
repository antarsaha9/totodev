import API from "./API";
import { setAPIHeader } from "./authService";

export const getCart = () => {
  setAPIHeader();
  return API.post("/getShoppingCart");
};

export const updateCart = (items) => {
  setAPIHeader();
  return API.post("/updateShoppingCart", {items});
};
