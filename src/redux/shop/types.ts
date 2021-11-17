export const SET_SHOP_STATUS = "shop/setShopStatus" as const;
export const SET_SHOP_SETTINGS = "shop/setShopSettings" as const;
export const SET_SHOP_PAYMENT = "shop/setShopPayment" as const;
export const SET_SHOP_ADDRESS = "shop/setShopAddress" as const;
export const SET_PRODUCT_STATUS = "shop/setProductStatus" as const;
export const SET_CATEGORY = "shop/setCategory" as const;
export const SET_PRODUCT_FORM = "shop/setProductForm" as const;
export const SET_VARIATION_FORM = "shop/setVariationForm" as const;
export const SET_AVAILABILITY_FORM = "shop/setAvailabilityForm" as const;
export const SET_WHOLESALE_FORM = "shop/setWholesaleForm" as const;
export const SET_SHIPPING_DETAILS_FORM = "shop/setShippingDetailsForm" as const;
export const SET_BASKET_CONTEXT = "shop/setBasketContext" as const;
export const SET_CHECKOUT_CONTEXT = "shop/setCheckoutContext" as const;
export const SET_SHIPPING_DATA = "shop/setShippingData" as const;

export const CLEAR_PRODUCT_ENTRY = "shop/clearProductEntry" as const;

export const ACT_SHOP_INFO_REQUEST = "shop/actShopInfoRequest" as const;
export const ACT_SHOP_INFO_SUCCESS = "shop/actShopInfoSuccess" as const;
export const ACT_SHOP_INFO_FAILURE = "shop/actShopInfoFailure" as const;

export const ACT_SHOP_DELETE_REQUEST = "shop/actShopDeleteRequest" as const;
export const ACT_SHOP_DELETE_SUCCESS = "shop/actShopDeleteSuccess" as const;
export const ACT_SHOP_DELETE_FAILURE = "shop/actShopDeleteFailure" as const;

export const ACT_SHOP_ADDRESS_REQUEST = "shop/actShopAddressRequest" as const;
export const ACT_SHOP_ADDRESS_SUCCESS = "shop/actShopAddressSuccess" as const;
export const ACT_SHOP_ADDRESS_FAILURE = "shop/actShopAddressFailure" as const;

export const ACT_ADD_PRODUCT_REQUEST = "shop/actAddProductRequest" as const;
export const ACT_ADD_PRODUCT_SUCCESS = "shop/actAddProductSuccess" as const;
export const ACT_ADD_PRODUCT_FAILURE = "shop/actAddProductFailure" as const;

export const ACT_PRODUCT_LIST_REQUEST = "shop/actProductListRequest" as const;
export const ACT_PRODUCT_LIST_SUCCESS = "shop/actProductListSuccess" as const;
export const ACT_PRODUCT_LIST_FAILURE = "shop/actProductListFailure" as const;

export const ACT_CATEGORY_LIST_REQUEST = "shop/actCategoryListRequest" as const;
export const ACT_CATEGORY_LIST_SUCCESS = "shop/actCategoryListSuccess" as const;
export const ACT_CATEGORY_LIST_FAILURE = "shop/actCategoryListFailure" as const;

export type Types =
  | typeof SET_SHOP_STATUS
  | typeof SET_SHOP_PAYMENT
  | typeof SET_SHOP_SETTINGS
  | typeof SET_SHOP_ADDRESS
  | typeof SET_PRODUCT_STATUS
  | typeof SET_SHIPPING_DATA
  | typeof SET_CATEGORY
  | typeof SET_PRODUCT_FORM
  | typeof SET_VARIATION_FORM
  | typeof SET_AVAILABILITY_FORM
  | typeof SET_WHOLESALE_FORM
  | typeof SET_SHIPPING_DETAILS_FORM
  | typeof SET_BASKET_CONTEXT
  | typeof SET_CHECKOUT_CONTEXT
  | typeof CLEAR_PRODUCT_ENTRY
  | typeof ACT_SHOP_INFO_REQUEST
  | typeof ACT_SHOP_INFO_SUCCESS
  | typeof ACT_SHOP_INFO_FAILURE
  | typeof ACT_SHOP_DELETE_REQUEST
  | typeof ACT_SHOP_DELETE_SUCCESS
  | typeof ACT_SHOP_DELETE_FAILURE
  | typeof ACT_SHOP_ADDRESS_REQUEST
  | typeof ACT_SHOP_ADDRESS_SUCCESS
  | typeof ACT_SHOP_ADDRESS_FAILURE
  | typeof ACT_ADD_PRODUCT_REQUEST
  | typeof ACT_ADD_PRODUCT_SUCCESS
  | typeof ACT_ADD_PRODUCT_FAILURE
  | typeof ACT_PRODUCT_LIST_REQUEST
  | typeof ACT_PRODUCT_LIST_SUCCESS
  | typeof ACT_PRODUCT_LIST_FAILURE
  | typeof ACT_CATEGORY_LIST_REQUEST
  | typeof ACT_CATEGORY_LIST_SUCCESS
  | typeof ACT_CATEGORY_LIST_FAILURE;
