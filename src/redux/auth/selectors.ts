import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { AuthState } from "./models";
import { initAuthState } from "./data";

export const rootSelector: Selector<StateAll, AuthState> = (state: StateAll) =>
  state.auth;

export const getLoginResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return state.loginResponse || initAuthState.loginResponse;
  });

export const getForgotResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return state.forgotResponse || initAuthState.forgotResponse;
  });
