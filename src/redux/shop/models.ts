import { ResponseState } from "redux/api-models/common";

import * as shop from "../api-models/shop";

export type ShopResponse = shop.Response;
export type ShopRequest = shop.Request;

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
};

declare module "../types" {
  export interface StateAll {
    shop: ShopState;
  }
}
