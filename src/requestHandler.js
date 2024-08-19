import axios from "axios";
import { getToken } from "./auth";

export const makeRequest = async (route, method = "get", payload = null) => {
  const request = await axios.request({
    baseURL: "http://ec2-18-188-56-228.us-east-2.compute.amazonaws.com:4000/",
    url: route,
    method: method,
    headers: {
      "x-token": getToken(),
    },
    data: payload,
  });
  return request;
};
