import { createAction, createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import * as models from "./models";

export const setShopStatus = createAction(
  types.SET_SHOP_STATUS,
  (resolve) => (values: models.ShopStatus) => resolve(values)
);

export const setProductStatus = createAction(
  types.SET_PRODUCT_STATUS,
  (resolve) => (values: models.CommonStatus) => resolve(values)
);

export const setProductMeasurement = createAction(
  types.SET_PRODUCT_MEASUREMENT,
  (resolve) => (value: string) => resolve(value)
);

export const setCategory = createAction(
  types.SET_CATEGORY,
  (resolve) => (value: number) => resolve(value)
);

export const setProductForm = createAction(
  types.SET_PRODUCT_FORM,
  (resolve) => (values: models.ProductForm) => resolve(values)
);

export const setVariationForm = createAction(
  types.SET_VARIATION_FORM,
  (resolve) => (values: models.VariationForm) => resolve(values)
);

export const setAvailabilityForm = createAction(
  types.SET_AVAILABILITY_FORM,
  (resolve) => (values: models.AvailabilityForm) => resolve(values)
);

export const setWholesaleForm = createAction(
  types.SET_WHOLESALE_FORM,
  (resolve) => (values: models.WholesaleForm) => resolve(values)
);

export const setShippingDetailsForm = createAction(
  types.SET_SHIPPING_DETAILS_FORM,
  (resolve) => (values: models.ShippingDetailsForm) => resolve(values)
);

export const clearProductEntry = createAction(
  types.CLEAR_PRODUCT_ENTRY,
  (resolve) => () => resolve()
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
  setProductStatus,
  setProductMeasurement,
  setCategory,
  setProductForm,
  setVariationForm,
  setAvailabilityForm,
  setWholesaleForm,
  setShippingDetailsForm,
  callShopApi,
  callProductsApi,
  clearProductEntry,
};
