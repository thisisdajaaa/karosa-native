export const SET_SHOP_STATUS = "shop/setShopStatus" as const;
export const SET_PRODUCT_STATUS = "shop/setProductStatus" as const;
export const SET_PRODUCT_MEASUREMENT = "shop/setProductMeasurement" as const;
export const SET_CATEGORY = "shop/setCategory" as const;
export const SET_PRODUCT_FORM = "shop/setProductForm" as const;
export const SET_VARIATION_FORM = "shop/setVariationForm" as const;
export const SET_AVAILABILITY_FORM = "shop/setAvailabilityForm" as const;
export const SET_WHOLESALE_FORM = "shop/setWholesaleForm" as const;
export const SET_SHIPPING_DETAILS_FORM = "shop/setShippingDetailsForm" as const;

export const CLEAR_PRODUCT_ENTRY = "shop/clearProductEntry" as const;

export const ACT_SHOP_INFO_REQUEST = "shop/actShopInfoRequest" as const;
export const ACT_SHOP_INFO_SUCCESS = "shop/actShopInfoSuccess" as const;
export const ACT_SHOP_INFO_FAILURE = "shop/actShopInfoFailure" as const;

export const ACT_ADD_PRODUCT_REQUEST = "shop/actAddProductRequest" as const;
export const ACT_ADD_PRODUCT_SUCCESS = "shop/actAddProductSuccess" as const;
export const ACT_ADD_PRODUCT_FAILURE = "shop/actAddProductFailure" as const;

export const ACT_PRODUCT_LIST_REQUEST = "shop/actProductListRequest" as const;
export const ACT_PRODUCT_LIST_SUCCESS = "shop/actProductListSuccess" as const;
export const ACT_PRODUCT_LIST_FAILURE = "shop/actProductListFailure" as const;

export type Types =
  | typeof SET_SHOP_STATUS
  | typeof SET_PRODUCT_STATUS
  | typeof SET_PRODUCT_MEASUREMENT
  | typeof SET_CATEGORY
  | typeof SET_PRODUCT_FORM
  | typeof SET_VARIATION_FORM
  | typeof SET_AVAILABILITY_FORM
  | typeof SET_WHOLESALE_FORM
  | typeof SET_SHIPPING_DETAILS_FORM
  | typeof CLEAR_PRODUCT_ENTRY
  | typeof ACT_SHOP_INFO_REQUEST
  | typeof ACT_SHOP_INFO_SUCCESS
  | typeof ACT_SHOP_INFO_FAILURE
  | typeof ACT_ADD_PRODUCT_REQUEST
  | typeof ACT_ADD_PRODUCT_SUCCESS
  | typeof ACT_ADD_PRODUCT_FAILURE
  | typeof ACT_PRODUCT_LIST_REQUEST
  | typeof ACT_PRODUCT_LIST_SUCCESS
  | typeof ACT_PRODUCT_LIST_FAILURE;