import axios, { AxiosInstance } from "axios";

const baseAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4040",
});

export { baseAxios };
