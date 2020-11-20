import axios, { AxiosInstance } from "axios";

const baseAxios: AxiosInstance = axios.create({
  // Don't forget to change the ip address to your own ip
  baseURL: "http://192.168.1.13:4040",
});

export { baseAxios };
