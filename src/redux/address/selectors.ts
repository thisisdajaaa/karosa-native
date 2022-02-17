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

export const getCoordinates = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.newAddressForm.coords ||
      initAddressState.addressEntryContext.newAddressForm.coords
    );
  });

export const getUserLocation = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.userLocation ||
      initAddressState.addressEntryContext.userLocation
    );
  });

export const getAddressList = () =>
  createSelector([rootSelector], (state: AddressState) => {
    return (
      state.addressEntryContext.addressList ||
      initAddressState.addressEntryContext.addressList
    );
  });

const selectors = {
  getNewAddressForm,
  getUserLocation,
  getCoordinates,
  getAddressList,
};

export default selectors;
