import { ResponseState } from "redux/api-models/common";

import * as shop from "../api-models/shop";
import * as products from "../api-models/products";

export type ShopResponse = shop.Response;
export type ShopRequest = shop.Request;
export type ProductResponse = products.Response;

export type CommonStatus = {
  available: boolean;
  planting: boolean;
  harvesting: boolean;
};

export type ProductForm = {
  productImg: null;
  productNm: string;
  description: string;
  price: string;
  weight: string;
  stocks: string;
  shelfLife: string;
  preOrder: boolean;
  status: CommonStatus;
};

export type VariationForm = {
  variationImg: null;
  productNm: string;
  price: string;
  weight: string;
  stocks: string;
};

export type AvailabilityForm = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

export type WholesaleForm = {
  min: string;
  max: string;
  unit: string;
};

export type ShopStatus = CommonStatus;

export type ShopEntryContext = {
  shopStatus: ShopStatus;
};

export type ProductEntryContext = {
  productForm: ProductForm;
  variationForm: VariationForm;
  availabilityForm: AvailabilityForm;
  wholesaleForm: WholesaleForm;
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
