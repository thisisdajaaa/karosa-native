import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

import { ResponseState } from "../api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const shopEntryContext = produce(
  (
    draft: Draft<models.ShopEntryContext>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.setShopStatus):
        draft.shopStatus = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.shopEntryContext
);

export const productEntryContext = produce(
  (
    draft: Draft<models.ProductEntryContext>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.setProductForm):
        draft.productForm = action.payload;
        return draft;
      case getType(actions.setVariationForm):
        draft.variationForm = action.payload;
        return draft;
      case getType(actions.setAvailabilityForm):
        draft.availabilityForm = action.payload;
        return draft;
      case getType(actions.setWholesaleForm):
        draft.wholesaleForm = action.payload;
        return draft;
      case getType(actions.setShippingDetailsForm):
        draft.shippingDetailsForm = action.payload;
        return draft;
      case getType(actions.setProductStatus):
        draft.productForm.status = action.payload;
        return draft;
      case getType(actions.setProductMeasurement):
        draft.productForm.measurement = action.payload;
        return draft;
      case getType(actions.setCategory):
        draft.productForm.categoryId = action.payload;
        return draft;
      case getType(actions.clearProductEntry):
        draft = data.initShopState.productEntryContext;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.productEntryContext
);

export const shopInfoResponse = produce(
  (
    draft: Draft<ResponseState<models.ShopInfoResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callShopInfoApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callShopInfoApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callShopInfoApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.shopInfoResponse
);

export const shopAddressResponse = produce(
  (
    draft: Draft<ResponseState<models.ShopAddressResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callShopAddressApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callShopAddressApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callShopAddressApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.shopAddressResponse
);

export const addProductResponse = produce(
  (
    draft: Draft<ResponseState<models.AddProductResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callAddProductApi.request):
        draft.response = data.initShopState.addProductResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callAddProductApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callAddProductApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.addProductResponse
);

export const productListResponse = produce(
  (
    draft: Draft<ResponseState<models.ProductListResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callProductListApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callProductListApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callProductListApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.productListResponse
);

const reducer = combineReducers({
  shopEntryContext,
  productEntryContext,
  shopInfoResponse,
  shopAddressResponse,
  addProductResponse,
  productListResponse,
});

export default reducer;
