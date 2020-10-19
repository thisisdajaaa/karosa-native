import { createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import {
  LoginRequest,
  LoginResponse,
  ForgotRequest,
  ForgotResponse,
} from "./models";

export const callLoginApi = createAsyncAction(
  types.ACT_LOGIN_REQUEST,
  types.ACT_LOGIN_SUCCESS,
  types.ACT_LOGIN_FAILURE
)<LoginRequest, LoginResponse, Error>();

export const callForgotApi = createAsyncAction(
  types.ACT_FORGOT_PASS_REQUEST,
  types.ACT_FORGOT_PASS_SUCCESS,
  types.ACT_FORGOT_PASS_FAILURE
)<ForgotRequest, ForgotResponse, Error>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callLoginApi,
  callForgotApi,
};
