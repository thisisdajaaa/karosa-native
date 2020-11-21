import axios, { AxiosInstance } from "axios";

const baseAxios: AxiosInstance = axios.create({
  // Don't forget to change the ip address to your own ip
  baseURL: "http://localhost:4040",
  withCredentials: true
});

export { baseAxios };
