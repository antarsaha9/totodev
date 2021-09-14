import _axios from "axios";
import { NotificationManager } from "react-notifications";

class API {
  static axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
  });

  static setHeader = (id_token) => {
    API.axios.defaults.headers = {
      common: {
        authorization: id_token,
      },
    };
  };

  static handleError = (error) => {
    const message =
      error.response?.data?.error_message ||
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.response?.message ||
      "Unknown error";

    NotificationManager.error(message);

    console.log(error);

    return null;
  };

  static get = async (url, config) => {
    try {
      const response = await API.axios.get(url, config);
      return response.data?.data;
    } catch (error) {
      return API.handleError(error);
    }
  };

  static post = async (url, data, config) => {
    try {
      const response = await API.axios.post(url, data, config);
      return response.data?.data;
    } catch (error) {
      return API.handleError(error);
    }
  };

  static put = async (url, data, config) => {
    try {
      const response = await API.axios.put(url, data, config);
      return response.data;
    } catch (error) {
      return API.handleError(error);
    }
  };
}

export default API;
