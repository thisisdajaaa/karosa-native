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

const selectors = {
  getNewAddressForm,
};

export default selectors;
