import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

import { ResponseState } from "../api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const entryContext = produce(
  (draft: Draft<models.EntryContext>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.setShopStatus):
        draft.shopStatus = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  data.initShopState.entryContext
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
      default:
        return draft;
    }
  },

  data.initShopState.productResponse
);

export const activateShopResponse = produce(
  (
    draft: Draft<ResponseState<models.ShopActivationResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callActivateShopApi.request):
        draft.response = data.initTakeOverData;
        draft.isLoading = true;
        return draft;
      case getType(actions.callActivateShopApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callActivateShopApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
 
  data.initTakeOverData
);

const reducer = combineReducers({
  entryContext,
  shopResponse,
  productResponse,
  activateShopResponse,
});

export default reducer;
