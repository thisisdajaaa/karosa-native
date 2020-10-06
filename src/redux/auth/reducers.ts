import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { ActionType, getType } from "typesafe-actions";

import { ResponseState } from "../models";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

type Actions = ActionType<typeof actions>;

export const loginResponse = produce(
  (draft: Draft<ResponseState<models.LoginResponse>>, action: Actions) => {
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

export const forgotResponse = produce(
  (draft: Draft<ResponseState<models.ForgotResponse>>, action: Actions) => {
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

export default combineReducers({
  login: loginResponse,
  forgotPassword: forgotResponse,
});
