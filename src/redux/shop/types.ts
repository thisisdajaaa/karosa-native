export const SET_SHOP_STATUS = "shop/setShopStatus" as const;

export const ACT_SHOP_SETTING_REQUEST = "shop/actShopRequest" as const;
export const ACT_SHOP_SETTING_SUCCESS = "shop/actShopSuccess" as const;
export const ACT_SHOP_SETTING_FAILURE = "shop/actShopFailure" as const;

export type Types =
  | typeof SET_SHOP_STATUS
  | typeof ACT_SHOP_SETTING_REQUEST
  | typeof ACT_SHOP_SETTING_SUCCESS
  | typeof ACT_SHOP_SETTING_FAILURE;
