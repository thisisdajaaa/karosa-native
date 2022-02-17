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

export const setAddressCoordinates = createAction(
  types.SET_ADDRESS_COORDINATES,
  (resolve) => (values: models.UserCoordinates) => resolve(values)
);

const actions = {
  setNewAddress,
  setUserLocation,
  setAddressCoordinates,
};

export default actions;
