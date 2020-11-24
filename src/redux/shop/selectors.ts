import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { ShopState } from "./models";
import { initShopState } from "./data";

export const rootSelector: Selector<StateAll, ShopState> = (state: StateAll) =>
  state.shop || initShopState;

export const getShopStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.entryContext.shopStatus || initShopState.entryContext.shopStatus
    );
  });

export const getShopResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.shopResponse || initShopState.shopResponse;
  });

export const getProductResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.productResponse || initShopState.productResponse;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getShopStatus,
  getShopResponse,
  getProductResponse,
};
