import { createAction } from "typesafe-actions";

import * as types from "./types";
import * as models from "./models";

export const setNewAddress = createAction(
  types.SET_NEW_ADDRESS,
  (resolve) => (values: models.NewAddressForm) => resolve(values)
);

const actions = {
  setNewAddress,
};

export default actions;
