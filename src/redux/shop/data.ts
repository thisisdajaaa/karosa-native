import { ENUM } from "@app/constants";
import { initNewAddress } from "@app/redux/address/data";
import { NewAddressForm } from "@app/redux/address/models";

import {
  AvailabilityForm,
  BasketContext,
  CheckoutContext,
  ProductForm,
  ShippingDetailsForm,
  ShopPaymentForm,
  ShopSettingsForm,
  ShopState,
  VariationForm,
  WholesaleForm,
} from "./models";

export const initProductForm: ProductForm = {
  productImages: [],
  productNm: "",
  description: "",
  price: "",
  weight: "",
  stocks: "",
  upcomingHarvest: false,
  estimateDate: null,
  shelfLife: null,
  preOrder: false,
  categoryId: null,
  categoryName: null,
  status: ENUM.Product_Status.Available,
  hasShippingData: false,
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
  hasOneOption: false,
  expressDelivery: false,
  pickUpBuyer: false,
  sellerCourier: false,
};

export const initShopSettingsForm: ShopSettingsForm = {
  shopName: "",
  coverPhoto: "",
  avatarPhoto: "",
  email: "",
  hasPayment: false,
  hasShopAddress: false,
  status: ENUM.Shop_Status.Active,
  startTime: "",
  endTime: "",
};

export const initShopPaymentForm: ShopPaymentForm = {
  cod: false,
  gcash: false,
  creditCard: false,
  hasOneOption: false,
};

export const initShopAddressForm: NewAddressForm = {
  ...initNewAddress,
};

export const initBasketContext: BasketContext = {
  storeData: [
    {
      id: "1",
      storeName: "Store Number 1",
      isChecked: false,
      items: [
        {
          id: "1",
          image:
            "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
          name: "Mangosteen Product Name sample text...",
          price: 200,
          quantity: 1,
          isChecked: false,
          stock: 4,
          selectedPicker: 100,
          picker: [
            {
              key: "1",
              label: "100 Kgms",
              value: 100,
            },
            {
              key: "2",
              label: "200 Kgms",
              value: 200,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      storeName: "Store Number 2",
      isChecked: false,
      items: [
        {
          id: "1",
          image:
            "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
          name: "Mangosteen Product Name sample text...",
          price: 200,
          stock: 3,
          quantity: 1,
          isChecked: false,
          selectedPicker: 100,
          picker: [
            {
              key: "1",
              label: "100 Kgms",
              value: 100,
            },
            {
              key: "2",
              label: "200 Kgms",
              value: 200,
            },
          ],
        },
        {
          id: "2",
          image:
            "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
          name: "Mangosteen Product Name sample text...",
          price: 300,
          quantity: 1,
          stock: 5,
          isChecked: false,
          selectedPicker: 300,
          picker: [
            {
              key: "1",
              label: "300 Kgms",
              value: 300,
            },
            {
              key: "2",
              label: "400 Kgms",
              value: 400,
            },
          ],
        },
      ],
    },
  ],
};

export const initCheckoutContext: CheckoutContext = {
  orderData: [],
  paymentMethod: "Cash on Delivery",
};

export const initShopState: ShopState = {
  basketContext: initBasketContext,
  checkoutContext: initCheckoutContext,
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
  categoryListResponse: {
    response: [],
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
    isLoading: false,
    response: {
      status: 0,
    },
  },
  productListResponse: {
    response: [],
    isLoading: false,
  },
};
