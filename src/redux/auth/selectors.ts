import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { AuthState } from "./models";
import { initAuthState } from "./data";

export const rootSelector: Selector<StateAll, AuthState> = (state: StateAll) =>
  state.auth || initAuthState;

export const getLoginResponse = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.loginResponse || initAuthState.loginResponse;
  });

export const getForgotResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return state.forgotResponse || initAuthState.forgotResponse;
  });

export const getMyAddressResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return (
      state.myAddressResponse.response ||
      initAuthState.myAddressResponse.response
    );
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoginResponse,
  getForgotResponse,
  getMyAddressResponse,
};
