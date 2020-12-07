import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { LocationState } from "./models";
import { initLocationState } from "./data";

export const rootSelector: Selector<StateAll, LocationState> = (
  state: StateAll
) => state.location || initLocationState;

export const getRegionResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      state.regionResponse.response || initLocationState.regionResponse.response
    );
  });

export const getProvinceResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      state.provinceResponse.response ||
      initLocationState.provinceResponse.response
    );
  });

export const getBarangayResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      state.barangayResponse.response ||
      initLocationState.barangayResponse.response
    );
  });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRegionResponse,
  getProvinceResponse,
  getBarangayResponse,
};
