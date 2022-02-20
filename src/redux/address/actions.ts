import { createAction, createAsyncAction } from "typesafe-actions";
import { ResponseError } from "@app/redux/api-models/common";

import * as types from "./types";
import * as models from "./models";

export const setNewAddress = createAction(
  types.SET_NEW_ADDRESS,
  (resolve) => (values: models.NewAddressForm) => resolve(values)
);

export const setUserCoordinates = createAction(
  types.SET_USER_COORDINATES,
  (resolve) => (values: models.UserCoordinates) => resolve(values)
);

export const setUserAddressList = createAction(
  types.SET_USER_ADDRESS_LIST,
  (resolve) => (values: models.NewAddressForm[]) => resolve(values)
);

export const callGeocoderApi = createAsyncAction(
  types.ACT_GEOCODER_REQUEST,
  types.ACT_GEOCODER_SUCCESS,
  types.ACT_GEOCODER_FAILURE
)<models.GeocoderRequest, models.GeocoderResponse, ResponseError>();

const actions = {
  setNewAddress,
  setUserCoordinates,
  setUserAddressList,
  callGeocoderApi,
};

export default actions;
