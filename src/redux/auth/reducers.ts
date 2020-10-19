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

const reducer = combineReducers({
  loginResponse,
  forgotResponse,
});

export default reducer;
