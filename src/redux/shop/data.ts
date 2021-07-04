import { ENUM } from "@app/constants";

import {
  AvailabilityForm,
  ProductForm,
  ShippingDetailsForm,
  ShopAddressForm,
  ShopPaymentForm,
  ShopSettingsForm,
  ShopState,
  VariationForm,
  WholesaleForm,
} from "./models";

export const initProductForm: ProductForm = {
  productImg: "",
  productNm: "",
  description: "",
  price: "",
  weight: "",
  stocks: "",
  upcomingHarvest: false,
  estimateDate: "",
  shelfLife: "",
  preOrder: false,
  measurement: "1",
  categoryId: 1,
  status: ENUM.Product_Status.Available,
};

export const initVariationForm: VariationForm = {
  variationData: [],
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

export const initShopSettingsForm: ShopSettingsForm = {
  shopName: "",
  coverPhoto: "",
  avatarPhoto: "",
  status: ENUM.Shop_Status.Active,
};

export const initShopPaymentForm: ShopPaymentForm = {
  cod: false,
  gcash: false,
  creditCard: false,
};

export const initShopAddressForm: ShopAddressForm = {
  fullName: "",
  detailedAddress: "",
  phoneNumber: "",
  cities: -1,
  barangay: -1,
  province: -1,
  region: -1,
};

export const initShopState: ShopState = {
  shopEntryContext: {
    shopSettings: initShopSettingsForm,
    shopPayment: initShopPaymentForm,
    shopAddress: initShopAddressForm,
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
        status: ENUM.Shop_Status.Active,
        createdAt: "",
        updatedAt: "",
      },
    },
    isLoading: false,
  },
  shopDeleteResponse: {
    response: false,
    isLoading: false,
  },
  shopAddressResponse: {
    response: {
      id: 0,
      name: "",
      type: ENUM.Address_Type.Shop,
      phoneNo: "",
      detailed_address: "",
      isDefaultAddress: false,
      barangayId: 0,
      userId: "",
      createdAt: "",
      updatedAt: "",
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
