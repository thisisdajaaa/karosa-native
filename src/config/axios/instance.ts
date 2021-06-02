import axios, { AxiosInstance } from "axios";
import { API_URL } from "@env";

const localhost = API_URL;

const baseAxios: AxiosInstance = axios.create({
  baseURL: localhost,
});

export { baseAxios };
