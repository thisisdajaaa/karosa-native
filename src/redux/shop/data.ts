import { ShopState, ShopStatus , takeOverData} from "./models";


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
      username: "cxoge6",
      email: "test2@gmail.com",
      shop: {
        id: 8,
        name: "",
        isActive: true,
        createdAt: "2020-11-13T13:01:16.625Z",
        updatedAt: "2020-11-13T13:01:16.625Z",
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
