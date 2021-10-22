import { createAction } from "typesafe-actions";

import * as types from "./types";
import * as models from "./models";

export const setNewAddress = createAction(
  types.SET_NEW_ADDRESS,
  (resolve) => (values: models.NewAddressForm) => resolve(values)
);

export const setUserLocation = createAction(
  types.SET_USER_LOCATION,
  (resolve) => (values: models.UserLocation) => resolve(values)
);

const actions = {
  setNewAddress,
  setUserLocation,
};

export default actions;
