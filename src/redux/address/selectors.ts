import { createSelector, Selector } from "reselect";
import { StateAll } from "@app/redux/types";

import { AddressState } from "./models";
import { initAddressState } from "./data";

export const rootSelector: Selector<StateAll, AddressState> = (
  state: StateAll
) => state.address || initAddressState;

export const getNewAddressForm = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.newAddressForm ||
      initAddressState.addressEntryContext.newAddressForm
    );
  });

export const getUserCoordinates = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.userCoordinates ||
      initAddressState.addressEntryContext.userCoordinates
    );
  });

export const getUserAddressList = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.userAddressList ||
      initAddressState.addressEntryContext.userAddressList
    );
  });

export const getGeocoderResponse = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return state.geocoderResponse || initAddressState.geocoderResponse;
  });

const selectors = {
  getNewAddressForm,
  getUserCoordinates,
  getUserAddressList,
  getGeocoderResponse,
};

export default selectors;
