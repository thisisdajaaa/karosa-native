import { ResponseState } from "@app/redux/api-models/common";

import * as shopInfo from "../api-models/shop-info";
import * as shopAddress from "../api-models/shop-address";
import * as addProduct from "../api-models/add-product";
import * as productList from "../api-models/product-list";
import { ENUM } from "@app/constants";

export type ShopInfoResponse = shopInfo.Response;
export type ShopAddressResponse = shopAddress.Response;
export type AddProductRequest = addProduct.Request;
export type AddProductResponse = addProduct.Response;
export type ProductListResponse = productList.Response;

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
  status: ENUM.Product_Status;
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

export type ShopSettingsForm = {
  coverPhoto?: string;
  avatarPhoto?: string;
  shopName: string;
  status: ENUM.Shop_Status;
};

export type ShopEntryContext = {
  shopSettings: ShopSettingsForm;
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
  shopAddressResponse: ResponseState<ShopAddressResponse>;
  addProductResponse: ResponseState<AddProductResponse>;
  productListResponse: ResponseState<ProductListResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    shop: ShopState;
  }
}
