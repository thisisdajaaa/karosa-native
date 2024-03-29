import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";
import { ResponseState } from "@app/redux/api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const authEntryContext = produce(
  (
    draft: Draft<models.AuthEntryContext>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.setAuthBack):
        draft.isBack = action.payload;
        return draft;
      case getType(actions.setAuthBack):
        draft.isOpen = action.payload;
        return draft;
      case getType(actions.setOAuth):
        draft.oauth = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  data.initAuthState.authEntryContext
);

export const loginResponse = produce(
  (
    draft: Draft<models.LoggedInResponse>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callLoginApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callLoginApi.success):
        draft.response.isLoggedIn = true;
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
    draft: Draft<models.LoggedInResponse>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callRegisterApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callRegisterApi.success):
        draft.response.isLoggedIn = true;
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

const reducer = combineReducers({
  authEntryContext,
  loginResponse,
  forgotResponse,
  registerResponse,
});

export default reducer;
