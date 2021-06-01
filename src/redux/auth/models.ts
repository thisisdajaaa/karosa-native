import * as login from "../api-models/login";
import * as register from "../api-models/register";
import * as forgot from "../api-models/forgot";
import * as myAddress from "../api-models/my-address";
import * as newAddress from "../api-models/new-address";
import { ResponseState } from "../api-models/common";

export type LoginRequest = login.Request;
export type ForgotRequest = forgot.Request;
export type ForgotResponse = forgot.Response;
export type MyAddressResponse = myAddress.Response;
export type NewAddressRequest = newAddress.Request;
export type NewAddressResponse = newAddress.Response;
export type RegisterRequest = register.Request;

export type AuthEntryContext = {
  isOpen: boolean;
  isBack: boolean;
};

export type LoggedInResponse = ResponseState<{ isLoggedIn: boolean }>;

export type AuthState = {
  authEntryContext: AuthEntryContext;
  loginResponse: LoggedInResponse;
  registerResponse: LoggedInResponse;
  forgotResponse: ResponseState<ForgotResponse>;
  myAddressResponse: ResponseState<MyAddressResponse>;
  newAddressResponse: ResponseState<NewAddressResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    auth: AuthState;
  }
}
