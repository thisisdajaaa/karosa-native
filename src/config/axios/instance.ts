import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const localhost =
  Platform.OS === "ios" ? "http://localhost:4040" : "http://10.0.2.2:4040";

const baseAxios: AxiosInstance = axios.create({
  // Don't forget to change the ip address to your own ip
  baseURL: localhost,
  withCredentials: true,
});

export { baseAxios };
