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

export const getShopSettings = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopSettings ||
      initShopState.shopEntryContext.shopSettings
    );
  });

export const getShopAddressForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopAddress ||
      initShopState.shopEntryContext.shopAddress
    );
  });

export const getShopPayment = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopPayment ||
      initShopState.shopEntryContext.shopPayment
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
  getShopPayment,
  getShopAddressForm,
  getShopSettings,
  getShippingDetailsForm,
  getProductMeasurement,
  getShopInfoResponse,
  getShopAddressResponse,
  getAddProductResponse,
  getProductListResponse,
};

export default selectors;
