import axios, { AxiosInstance } from "axios";

const baseAxios: AxiosInstance = axios.create({
  baseURL: "https://raw.githubusercontent.com/karlotoy/lig-chat-up/master",
});

export { baseAxios };
