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
      (state.regionResponse.response.length > 1 &&
        state.regionResponse.response) ||
      initLocationState.regionResponse.response
    );
  });

export const getProvinceResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      (state.provinceResponse.response.length > 1 &&
        state.provinceResponse.response) ||
      initLocationState.provinceResponse.response
    );
  });

export const getBarangayResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      (state.barangayResponse.response.length > 1 &&
        state.barangayResponse.response) ||
      initLocationState.barangayResponse.response
    );
  });

export const getCitiesResponse = () =>
  createSelector(rootSelector, (state: LocationState) => {
    return (
      (state.citiesResponse.response.length > 1 &&
        state.citiesResponse.response) ||
      initLocationState.citiesResponse.response
    );
  });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRegionResponse,
  getProvinceResponse,
  getBarangayResponse,
  getCitiesResponse,
};
