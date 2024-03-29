import { createAction, createAsyncAction } from "typesafe-actions";
import { ENUM } from "@app/constants";
import { ResponseError } from "@app/redux/api-models/common";

import * as types from "./types";
import {
  LoginRequest,
  RegisterRequest,
  ForgotRequest,
  ForgotResponse,
  LoggedInResponse,
} from "./models";

export const setAuthBack = createAction(
  types.SET_AUTH_BACK,
  (resolve) => (value: boolean) => resolve(value)
);

export const setAuthOpen = createAction(
  types.SET_AUTH_OPEN,
  (resolve) => (value: boolean) => resolve(value)
);

export const setOAuth = createAction(
  types.SET_OAUTH,
  (resolve) => (value: ENUM.OAuth) => resolve(value)
);

export const callLoginApi = createAsyncAction(
  types.ACT_LOGIN_REQUEST,
  types.ACT_LOGIN_SUCCESS,
  types.ACT_LOGIN_FAILURE
)<LoginRequest, LoggedInResponse, ResponseError>();

export const callRegisterApi = createAsyncAction(
  types.ACT_REGISTER_REQUEST,
  types.ACT_REGISTER_SUCCESS,
  types.ACT_REGISTER_FAILURE
)<RegisterRequest, LoggedInResponse, ResponseError>();

export const callForgotApi = createAsyncAction(
  types.ACT_FORGOT_PASS_REQUEST,
  types.ACT_FORGOT_PASS_SUCCESS,
  types.ACT_FORGOT_PASS_FAILURE
)<ForgotRequest, ForgotResponse, ResponseError>();

const actions = {
  setAuthBack,
  setAuthOpen,
  setOAuth,
  callLoginApi,
  callForgotApi,
  callRegisterApi,
};

export default actions;
