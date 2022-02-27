import axios, { AxiosInstance } from "axios";
import { API_URL } from "@env";

const baseAxios = (baseURL?: string): AxiosInstance => {
  const url = baseURL || API_URL;

  return axios.create({
    baseURL: url,
    withCredentials: true,
  });
};

export { baseAxios };
