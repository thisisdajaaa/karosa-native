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
