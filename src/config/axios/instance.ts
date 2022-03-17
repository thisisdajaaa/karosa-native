import axios, { AxiosInstance } from "axios";
import { API_URL } from "@env";

const baseAxios: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export { baseAxios };
