import API from "./API";
import { setAPIHeader } from "./authService";

export const getCart = () => {
  setAPIHeader();
  return API.post("/getShoppingCart");
};

export const updateCart = async (values) => {
  setAPIHeader();
  return API.post("/updateShoppingCart", values);
};
