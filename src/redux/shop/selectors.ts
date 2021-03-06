import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { ShopState } from "./models";
import { initShopState } from "./data";

export const rootSelector: Selector<StateAll, ShopState> = (state: StateAll) =>
  state.shop || initShopState;

export const getProductForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm ||
      initShopState.productEntryContext.productForm
    );
  });

export const getVariationForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.variationForm ||
      initShopState.productEntryContext.variationForm
    );
  });

export const getAvailabilityForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.availabilityForm ||
      initShopState.productEntryContext.availabilityForm
    );
  });

export const getWholesaleForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.wholesaleForm ||
      initShopState.productEntryContext.wholesaleForm
    );
  });

export const getShippingDetailsForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.shippingDetailsForm ||
      initShopState.productEntryContext.shippingDetailsForm
    );
  });

export const getShopStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopStatus ||
      initShopState.shopEntryContext.shopStatus
    );
  });

export const getShopSettings = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopSettings ||
      initShopState.shopEntryContext.shopSettings
    );
  });

export const getProductStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm.status ||
      initShopState.productEntryContext.productForm.status
    );
  });

export const getProductMeasurement = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm.measurement ||
      initShopState.productEntryContext.productForm.measurement
    );
  });

export const getShopInfoResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.shopInfoResponse || initShopState.shopInfoResponse;
  });

export const getShopAddressResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.shopAddressResponse || initShopState.shopAddressResponse;
  });

export const getAddProductResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.addProductResponse || initShopState.addProductResponse;
  });

export const getProductListResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.productListResponse || initShopState.productListResponse;
  });

const selectors = {
  getAvailabilityForm,
  getProductForm,
  getVariationForm,
  getWholesaleForm,
  getShopSettings,
  getShippingDetailsForm,
  getShopStatus,
  getProductStatus,
  getProductMeasurement,
  getShopInfoResponse,
  getShopAddressResponse,
  getAddProductResponse,
  getProductListResponse,
};

export default selectors;
