import { ShopState, ShopStatus } from "./models";

export const initShopStatus: ShopStatus = {
  available: false,
  harvesting: false,
  planting: false,
};

export const initShopState: ShopState = {
  entryContext: {
    shopStatus: initShopStatus,
  },
  shopResponse: {
    response: {
      shopName: "",
      shopStatus: "",
      shopAddress: "",
    },
    isLoading: false,
  },
};
