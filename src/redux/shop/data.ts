import { CommonStatus, ProductForm, ShopState, ShopStatus } from "./models";

export const initCommonStatus: ShopStatus = {
  available: true,
  harvesting: false,
  planting: false,
};

export const initProductForm: ProductForm = {
  productImg: null,
  productNm: "",
  description: "",
  price: "",
  weight: "",
  stocks: "",
  shelfLife: "",
  preOrder: false,
};

export const initShopStatus: CommonStatus = initCommonStatus;
export const initProductStatus: CommonStatus = initCommonStatus;

export const initShopState: ShopState = {
  shopEntryContext: {
    shopStatus: initShopStatus,
  },
  productEntryContext: {
    productForm: initProductForm,
    productStatus: initProductStatus,
  },
  shopResponse: {
    response: {
      shopName: "",
      shopStatus: "",
      shopAddress: "",
    },
    isLoading: false,
  },
  productResponse: {
    response: [],
    isLoading: false,
  },
};
