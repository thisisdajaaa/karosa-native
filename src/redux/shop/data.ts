import { ShopState, ShopStatus, takeOverData } from "./models";

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
      username: "",
      email: "",
      shop: {
        id: 0,
        name: "",
        isActive: false,
        createdAt: "",
        updatedAt: "",
      },
    },
    isLoading: false,
  },
  productResponse: {
    response: [],
    isLoading: false,
  },
};

export const initTakeOverData: takeOverData = {
  isActive: true,
};
