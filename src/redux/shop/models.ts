import { ResponseState } from "redux/api-models/common";

import * as shop from "../api-models/shop";
import * as products from "../api-models/products";
import * as activateShop from "../api-models/create-shop";
import * as deleteShop from "../api-models/delete-shop";

export type ShopResponse = shop.Response;
export type ShopRequest = shop.Request;
export type ProductResponse = products.Response;


export type ShopActivationResponse = activateShop.Response;
export type ShopActivationRequest = activateShop.Request;

export type ShopDeletionResponse = deleteShop.Response;
export type ShopDeletionRequest = deleteShop.Request;

export type ShopStatus = {
  available: boolean;
  planting: boolean;
  harvesting: boolean;
};


export type EntryContext = {
  shopStatus: ShopStatus;
};

export type ShopState = {
  entryContext: EntryContext;
  shopResponse: ResponseState<ShopResponse>;
  productResponse: ResponseState<ProductResponse>;
  activateShopResponse: ResponseState<ShopActivationResponse>;
};

export type takeOverData = {
  isActive: boolean;
}

declare module "../types" {
  export interface StateAll {
    shop: ShopState;
  }
}
