import { createAction, createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import * as models from "./models";

export const setShopStatus = createAction(
  types.SET_SHOP_STATUS,
  (resolve) => (values: models.ShopStatus) => resolve(values)
);

export const callShopApi = createAsyncAction(
  types.ACT_SHOP_SETTING_REQUEST,
  types.ACT_SHOP_SETTING_SUCCESS,
  types.ACT_SHOP_SETTING_FAILURE
)<models.ShopRequest, models.ShopResponse, Error>();

export const callProductsApi = createAsyncAction(
  types.ACT_MY_PRODUCTS_REQUEST,
  types.ACT_MY_PRODUCTS_SUCCESS,
  types.ACT_MY_PRODUCTS_FAILURE
)<undefined, models.ProductResponse, Error>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setShopStatus,
  callShopApi,
  callProductsApi,
};
