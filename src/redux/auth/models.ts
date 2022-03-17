import { ENUM } from "@app/constants";
import * as login from "@app/redux/api-models/login";
import * as register from "@app/redux/api-models/register";
import * as forgot from "@app/redux/api-models/forgot";
import { ResponseState } from "@app/redux/api-models/common";

export type LoginRequest = login.Request;
export type ForgotRequest = forgot.Request;
export type ForgotResponse = forgot.Response;
export type RegisterRequest = register.Request;

export type AuthEntryContext = {
  isOpen: boolean;
  isBack: boolean;
  oauth: ENUM.OAuth;
};

export type LoggedInResponse = ResponseState<{ isLoggedIn: boolean }>;

export type AuthState = {
  authEntryContext: AuthEntryContext;
  loginResponse: LoggedInResponse;
  registerResponse: LoggedInResponse;
  forgotResponse: ResponseState<ForgotResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    auth: AuthState;
  }
}
