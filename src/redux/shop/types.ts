export const SET_SHOP_STATUS = "shop/setShopStatus" as const;

export const ACT_SHOP_ACTIVATION_REQUEST = "shop/actShopActivationRequest" as const;
export const ACT_SHOP_ACTIVATION_SUCCESS = "shop/actShopActivationSuccess" as const;
export const ACT_SHOP_ACTIVATION_FAILURE = "shop/actShopActivationFailure" as const;


export const ACT_SHOP_DELETION_REQUEST = "shop/actShopActivationRequest" as const;
export const ACT_SHOP_DELETION_SUCCESS = "shop/actShopActivationSuccess" as const;
export const ACT_SHOP_DELETION_FAILURE = "shop/actShopActivationFailure" as const;

export const ACT_SHOP_SETTING_REQUEST = "shop/actShopRequest" as const;
export const ACT_SHOP_SETTING_SUCCESS = "shop/actShopSuccess" as const;
export const ACT_SHOP_SETTING_FAILURE = "shop/actShopFailure" as const;

export const ACT_MY_PRODUCTS_REQUEST = "shop/actMyProductsRequest" as const;
export const ACT_MY_PRODUCTS_SUCCESS = "shop/actMyProductsSuccess" as const;
export const ACT_MY_PRODUCTS_FAILURE = "shop/actMyProductsFailure" as const;
export const ACT_REGISTER_USER_REQUEST = "shop/actRegisterUserRequest" as const;
export const ACT_REGISTER_USER_SUCCESS = "shop/actRegisterUserSuccess" as const;
export const ACT_REGISTER_USER_FAILURE = "shop/actRegisterUserFailure" as const;

export type Types =
  | typeof ACT_SHOP_SETTING_REQUEST
  | typeof ACT_SHOP_SETTING_SUCCESS
  | typeof ACT_SHOP_SETTING_FAILURE
  | typeof ACT_MY_PRODUCTS_REQUEST
  | typeof ACT_MY_PRODUCTS_SUCCESS
  | typeof ACT_MY_PRODUCTS_FAILURE
  | typeof SET_SHOP_STATUS
  | typeof SET_SHOP_STATUS
  | typeof ACT_SHOP_ACTIVATION_REQUEST
  | typeof ACT_SHOP_ACTIVATION_SUCCESS
  | typeof ACT_SHOP_ACTIVATION_FAILURE
  | typeof ACT_SHOP_DELETION_REQUEST
  | typeof ACT_SHOP_DELETION_SUCCESS
  | typeof ACT_SHOP_DELETION_FAILURE;
