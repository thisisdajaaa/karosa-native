import { RES_SHOP_STATUS } from "@app/constants";

import {
  AvailabilityForm,
  CommonStatus,
  ProductForm,
  ShippingDetailsForm,
  ShopState,
  ShopStatus,
  VariationForm,
  WholesaleForm,
} from "./models";

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
  measurement: "1",
  categoryId: 1,
  status: initCommonStatus,
};

export const initVariationForm: VariationForm = {
  variationImg: null,
  productNm: "",
  price: "",
  weight: "",
  stocks: "",
};

export const initAvailabilityForm: AvailabilityForm = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

export const initWholesaleForm: WholesaleForm = {
  min: "",
  max: "",
  unit: "",
};

export const initShippingDetailsForm: ShippingDetailsForm = {
  weight: "",
  width: "",
  length: "",
  height: "",
  expressDelivery: false,
  karosaDelivery: false,
  pickUpBuyer: false,
  sellerCourier: false,
};

export const initShopStatus: CommonStatus = initCommonStatus;
export const initProductStatus: CommonStatus = initCommonStatus;

export const initShopState: ShopState = {
  shopEntryContext: {
    shopStatus: initShopStatus,
  },
  productEntryContext: {
    productForm: initProductForm,
    variationForm: initVariationForm,
    availabilityForm: initAvailabilityForm,
    wholesaleForm: initWholesaleForm,
    shippingDetailsForm: initShippingDetailsForm,
  },
  shopInfoResponse: {
    response: {
      username: "",
      email: "",
      shop: {
        id: 0,
        name: "",
        isActive: false,
        status: RES_SHOP_STATUS.Active,
        createdAt: "",
        updatedAt: "",
      },
    },
    isLoading: false,
  },
  addProductResponse: {
    response: {
      id: 0,
      shopId: 0,
      categoryId: 0,
      name: "",
      description: "",
    },
    isLoading: false,
  },
  productListResponse: {
    response: [],
    isLoading: false,
  },
};
