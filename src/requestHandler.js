import axios from "axios";
import { getToken } from "./auth";

export const makeRequest = async (route, method = "get", payload = null) => {
  const request = await axios.request({
    baseURL: "http://localhost:4000/",
    url: route,
    method: method,
    headers: {
      "x-token": getToken(),
    },
    data: payload,
  });
  return request;
};
