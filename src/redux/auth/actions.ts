import { createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgotRequest,
  ForgotResponse,
  MyAddressResponse,
  NewAddressRequest,
  NewAddressResponse,
  RegisterResponse,
} from "./models";

export const callLoginApi = createAsyncAction(
  types.ACT_LOGIN_REQUEST,
  types.ACT_LOGIN_SUCCESS,
  types.ACT_LOGIN_FAILURE
)<LoginRequest, LoginResponse, Error>();

export const callRegisterApi = createAsyncAction(
  types.ACT_REGISTER_REQUEST,
  types.ACT_REGISTER_SUCCESS,
  types.ACT_REGISTER_FAILURE
)<RegisterRequest, RegisterResponse, Error>();

export const callForgotApi = createAsyncAction(
  types.ACT_FORGOT_PASS_REQUEST,
  types.ACT_FORGOT_PASS_SUCCESS,
  types.ACT_FORGOT_PASS_FAILURE
)<ForgotRequest, ForgotResponse, Error>();

export const callMyAddressApi = createAsyncAction(
  types.ACT_MY_ADDRESS_REQUEST,
  types.ACT_MY_ADDRESS_SUCCESS,
  types.ACT_MY_ADDRESS_FAILURE
)<undefined, MyAddressResponse, Error>();

export const callNewAddressApi = createAsyncAction(
  types.ACT_NEW_ADDRESS_REQUEST,
  types.ACT_NEW_ADDRESS_SUCCESS,
  types.ACT_NEW_ADDRESS_FAILURE
)<NewAddressRequest, NewAddressResponse, Error>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callLoginApi,
  callForgotApi,
  callMyAddressApi,
  callNewAddressApi,
  callRegisterApi,
};
