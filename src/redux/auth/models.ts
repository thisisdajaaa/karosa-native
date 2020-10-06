import * as login from "../api-models/login";
import * as forgot from "../api-models/forgot";
import { ResponseState } from "../models";

export type LoginRequest = login.Request;
export type LoginResponse = login.Response;
export type ForgotRequest = forgot.Request;
export type ForgotResponse = forgot.Response;

export type AuthState = {
  loginResponse: ResponseState<LoginResponse>;
  forgotResponse: ResponseState<ForgotResponse>;
};

declare module "../types" {
  export interface StateAll {
    auth: AuthState;
  }
}
