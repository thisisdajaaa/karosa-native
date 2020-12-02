export const SET_SHOP_STATUS = "shop/setShopStatus" as const;
export const SET_PRODUCT_STATUS = "shop/setProductStatus" as const;
export const SET_PRODUCT_FORM = "shop/setProductForm" as const;
export const SET_VARIATION_FORM = "shop/setVariationForm" as const;
export const SET_AVAILABILITY_FORM = "shop/setAvailabilityForm" as const;
export const SET_WHOLESALE_FORM = "shop/setWholesaleForm" as const;

export const CLEAR_PRODUCT_ENTRY = "shop/clearProductEntry" as const;

export const ACT_SHOP_SETTING_REQUEST = "shop/actShopRequest" as const;
export const ACT_SHOP_SETTING_SUCCESS = "shop/actShopSuccess" as const;
export const ACT_SHOP_SETTING_FAILURE = "shop/actShopFailure" as const;

export const ACT_MY_PRODUCTS_REQUEST = "shop/actMyProductsRequest" as const;
export const ACT_MY_PRODUCTS_SUCCESS = "shop/actMyProductsSuccess" as const;
export const ACT_MY_PRODUCTS_FAILURE = "shop/actMyProductsFailure" as const;

export type Types =
  | typeof SET_SHOP_STATUS
  | typeof SET_PRODUCT_FORM
  | typeof SET_VARIATION_FORM
  | typeof SET_AVAILABILITY_FORM
  | typeof SET_WHOLESALE_FORM
  | typeof SET_PRODUCT_STATUS
  | typeof CLEAR_PRODUCT_ENTRY
  | typeof ACT_SHOP_SETTING_REQUEST
  | typeof ACT_SHOP_SETTING_SUCCESS
  | typeof ACT_SHOP_SETTING_FAILURE
  | typeof ACT_MY_PRODUCTS_REQUEST
  | typeof ACT_MY_PRODUCTS_SUCCESS
  | typeof ACT_MY_PRODUCTS_FAILURE;
