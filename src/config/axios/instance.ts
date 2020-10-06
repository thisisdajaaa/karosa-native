import { AxiosInstance } from "axios";

import AxiosWrapper from "./wrapper";

const AxiosWrapperInstance = new AxiosWrapper("url");

const axios: AxiosInstance = AxiosWrapperInstance.client;

export { axios };
