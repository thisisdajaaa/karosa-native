import { createSelector, Selector } from "reselect";
import { StateAll } from "@app/redux/types";

import { AuthState } from "./models";
import { initAuthState } from "./data";

export const rootSelector: Selector<StateAll, AuthState> = (state: StateAll) =>
  state.auth || initAuthState;

export const getAuthEntryContext = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.authEntryContext || initAuthState.authEntryContext;
  });

export const getLoginResponse = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.loginResponse || initAuthState.loginResponse;
  });

export const getRegisterResponse = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.registerResponse || initAuthState.registerResponse;
  });

export const getForgotResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return state.forgotResponse || initAuthState.forgotResponse;
  });

const selectors = {
  getAuthEntryContext,
  getLoginResponse,
  getForgotResponse,
  getRegisterResponse,
};

export default selectors;
