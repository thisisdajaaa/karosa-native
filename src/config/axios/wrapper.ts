import { AxiosInstance } from "axios";

declare class AxiosWrapper {
  client: AxiosInstance;
  constructor(baseUrl: string, logRequest?: boolean, timeout?: number);
}

export default AxiosWrapper;
