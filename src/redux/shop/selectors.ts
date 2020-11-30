import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { ShopState } from "./models";
import { initShopState } from "./data";

export const rootSelector: Selector<StateAll, ShopState> = (state: StateAll) =>
  state.shop || initShopState;

export const getShopStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopStatus ||
      initShopState.shopEntryContext.shopStatus
    );
  });

export const getProductForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm ||
      initShopState.productEntryContext.productForm
    );
  });

export const getProductStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productStatus ||
      initShopState.productEntryContext.productStatus
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
  getProductForm,
  getProductStatus,
  getShopResponse,
  getProductResponse,
};
