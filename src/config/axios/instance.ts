import axios, { AxiosInstance } from "axios";

const localhost =
  "http://tambisqa-env.eba-hwct9u5s.ap-southeast-1.elasticbeanstalk.com";

const baseAxios: AxiosInstance = axios.create({
  baseURL: localhost,
});

export { baseAxios };
