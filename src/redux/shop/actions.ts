import { createAction, createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import { ShopResponse, ShopRequest, ShopStatus } from "./models";

export const setShopStatus = createAction(
  types.SET_SHOP_STATUS,
  (resolve) => (values: ShopStatus) => resolve(values)
);

export const callShopApi = createAsyncAction(
  types.ACT_SHOP_SETTING_REQUEST,
  types.ACT_SHOP_SETTING_SUCCESS,
  types.ACT_SHOP_SETTING_FAILURE
)<ShopRequest, ShopResponse, Error>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setShopStatus,
  callShopApi,
};
