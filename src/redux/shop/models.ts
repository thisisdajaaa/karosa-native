import { ResponseState } from "redux/api-models/common";

import * as shop from "../api-models/shop";
import * as products from "../api-models/products";

export type ShopResponse = shop.Response;
export type ShopRequest = shop.Request;
export type ProductResponse = products.Response;

export type ProductForm = {
  productImg: null;
  productNm: string;
  description: string;
  price: string;
  weight: string;
  stocks: string;
  shelfLife: string;
  preOrder: boolean;
};

export type CommonStatus = {
  available: boolean;
  planting: boolean;
  harvesting: boolean;
};

export type ShopStatus = CommonStatus;
export type ProductStatus = CommonStatus;

export type ShopEntryContext = {
  shopStatus: ShopStatus;
};

export type ProductEntryContext = {
  productStatus: ShopStatus;
  productForm: ProductForm;
};

export type ShopState = {
  shopEntryContext: ShopEntryContext;
  productEntryContext: ProductEntryContext;
  shopResponse: ResponseState<ShopResponse>;
  productResponse: ResponseState<ProductResponse>;
};

declare module "../types" {
  export interface StateAll {
    shop: ShopState;
  }
}
