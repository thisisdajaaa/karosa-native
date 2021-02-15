import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

import { ResponseState } from "../api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const loginResponse = produce(
  (
    draft: Draft<ResponseState<models.LoginResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callLoginApi.request):
        draft.response = data.initAuthState.loginResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callLoginApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callLoginApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.loginResponse
);

export const registerResponse = produce(
  (
    draft: Draft<ResponseState<models.RegisterResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callRegisterApi.request):
        draft.response = data.initAuthState.registerResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callRegisterApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callRegisterApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.registerResponse
);

export const forgotResponse = produce(
  (
    draft: Draft<ResponseState<models.ForgotResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callForgotApi.request):
        draft.response = data.initAuthState.forgotResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callForgotApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callForgotApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.forgotResponse
);

export const myAddressResponse = produce(
  (
    draft: Draft<ResponseState<models.MyAddressResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callMyAddressApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callMyAddressApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callMyAddressApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.myAddressResponse
);

export const newAddressResponse = produce(
  (
    draft: Draft<ResponseState<models.NewAddressResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callNewAddressApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callNewAddressApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callNewAddressApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.newAddressResponse
);

const reducer = combineReducers({
  loginResponse,
  forgotResponse,
  myAddressResponse,
  newAddressResponse,
});

export default reducer;
