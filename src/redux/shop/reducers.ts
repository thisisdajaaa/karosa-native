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
      case getType(actions.setProductStatus):
        draft.productStatus = action.payload;
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

export const shopResponse = produce(
  (
    draft: Draft<ResponseState<models.ShopResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callShopApi.request):
        draft.response = data.initShopState.shopResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callShopApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callShopApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.shopResponse
);

export const productResponse = produce(
  (
    draft: Draft<ResponseState<models.ProductResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callProductsApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callProductsApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callProductsApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.productResponse
);

const reducer = combineReducers({
  shopEntryContext,
  productEntryContext,
  shopResponse,
  productResponse,
});

export default reducer;
