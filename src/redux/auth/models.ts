import * as login from "../api-models/login";
import * as register from "../api-models/register";
import * as forgot from "../api-models/forgot";
import * as myAddress from "../api-models/my-address";
import * as newAddress from "../api-models/new-address";
import { ResponseState } from "../api-models/common";

export type LoginRequest = login.Request;
export type LoginResponse = login.Response;
export type ForgotRequest = forgot.Request;
export type ForgotResponse = forgot.Response;
export type MyAddressResponse = myAddress.Response;
export type NewAddressRequest = newAddress.Request;
export type NewAddressResponse = newAddress.Response;
export type RegisterRequest = register.Request;
export type RegisterResponse = register.Response;

export type AuthState = {
  loginResponse: ResponseState<LoginResponse>;
  forgotResponse: ResponseState<ForgotResponse>;
  myAddressResponse: ResponseState<MyAddressResponse>;
  newAddressResponse: ResponseState<NewAddressResponse>;
  registerResponse: ResponseState<RegisterResponse>;
};

declare module "../types" {
  export interface StateAll {
    auth: AuthState;
  }
}
