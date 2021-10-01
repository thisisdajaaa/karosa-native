import { ENUM } from "@app/constants";

import {
  AvailabilityForm,
  BasketContext,
  CheckoutContext,
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
  orderData: [
    {
      id: "1",
      storeName: "Mang Kanor Fruit Stand",
      deliveryOption: "Standard Express",
      noOfItems: 2,
      orderTotal: 2550,
      items: [
        {
          id: "1",
          image:
            "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
          name: "Mangosteen Product Name sample text...",
          price: 300,
          quantity: 1,
          selectedPickerLabel: "300 Kgms",
          selectedPickerValue: 300,
        },
      ],
    },
    // {
    //   id: "2",
    //   storeName: "Mang Kanor Fruit Stand",
    //   deliveryOption: "Standard Express",
    //   noOfItems: 2,
    //   orderTotal: 2550,
    //   items: [
    //     {
    //       id: "2",
    //       image:
    //         "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
    //       name: "Mangosteen Product Name sample text...",
    //       price: 300,
    //       quantity: 1,
    //       selectedPickerLabel: "300 Kgms",
    //       selectedPickerValue: 300,
    //     },
    //   ],
    // },
  ],
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
