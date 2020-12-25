import { ResponseState } from "redux/api-models/common";

import * as shopInfo from "../api-models/shop-info";
import * as addProduct from "../api-models/add-product";
import * as productList from "../api-models/product-list";

export type ShopInfoResponse = shopInfo.Response;
export type AddProductRequest = addProduct.Request;
export type AddProductResponse = addProduct.Response;
export type ProductListResponse = productList.Response;

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
  measurement: string;
  categoryId: number;
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

export type ShippingDetailsForm = {
  weight: string;
  width: string;
  length: string;
  height: string;
  expressDelivery: boolean;
  karosaDelivery: boolean;
  pickUpBuyer: boolean;
  sellerCourier: boolean;
};

export type ShopEntryContext = {
  shopStatus: CommonStatus;
};

export type ProductEntryContext = {
  productForm: ProductForm;
  variationForm: VariationForm;
  availabilityForm: AvailabilityForm;
  wholesaleForm: WholesaleForm;
  shippingDetailsForm: ShippingDetailsForm;
};

export type ShopState = {
  shopEntryContext: ShopEntryContext;
  productEntryContext: ProductEntryContext;
  shopInfoResponse: ResponseState<ShopInfoResponse>;
  addProductResponse: ResponseState<AddProductResponse>;
  productListResponse: ResponseState<ProductListResponse>;
};

declare module "../types" {
  export interface StateAll {
    shop: ShopState;
  }
}
