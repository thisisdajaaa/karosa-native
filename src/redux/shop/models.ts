import { PickerData, ResponseState } from "@app/redux/api-models/common";
import { ENUM } from "@app/constants";
import * as shopInfo from "@app/redux/api-models/shop-info";
import * as shopDelete from "@app/redux/api-models/shop-delete";
import * as shopAddress from "@app/redux/api-models/shop-address";
import * as addProduct from "@app/redux/api-models/add-product";
import * as productList from "@app/redux/api-models/product-list";
import * as category from "@app/redux/api-models/category-list";

export type ShopInfoResponse = shopInfo.Response;
export type ShopDeleteResponse = shopDelete.Response;
export type ShopAddressResponse = shopAddress.Response;
export type ProductListResponse = productList.Response;
export type AddProductRequest = addProduct.Request;
export type AddProductResponse = addProduct.Response;
export type CategoryListResponse = category.Response;

export type ProductForm = {
  productImages: string[];
  productNm: string;
  description: string;
  price: string;
  weight: string;
  stocks: string;
  shelfLife: string;
  estimateDate?: string;
  upcomingHarvest: boolean;
  preOrder: boolean;
  measurement: string;
  categoryId: number | null;
  status: ENUM.Product_Status;
  hasShippingData: boolean;
};

export type VariationForm = {
  variationData: VariationItem[];
};

export type VariationItem = {
  id: string | number[];
  variationName: string;
  hasImage: boolean;
  options: VariationOption[];
};

export type VariationOption = {
  id: string | number[];
  image: string | null;
  optionName: string;
  price: string;
  stock: string;
  weight: string;
};

export type AvailabilityForm = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

export type WholesaleForm = {
  min: string;
  max: string;
  unit: string;
};

export type ShippingDetailsForm = {
  weight: string;
  width: string;
  length: string;
  height: string;
  hasOneOption: boolean;
  expressDelivery: boolean;
  pickUpBuyer: boolean;
  sellerCourier: boolean;
};

export type ShopSettingsForm = {
  coverPhoto?: string;
  avatarPhoto?: string;
  shopName: string;
  status: ENUM.Shop_Status;
};

export type ShopPaymentForm = {
  cod: boolean;
  gcash: boolean;
  creditCard: boolean;
};

export type ShopAddressForm = {
  fullName: string;
  phoneNumber: string;
  region: number;
  province: number;
  cities: number;
  barangay: number;
  detailedAddress: string;
};

export type StoreData = {
  id: string;
  storeName: string;
  isChecked: boolean;
  items: StoreItems[];
};

export type StoreItems = {
  id: string;
  image: string;
  isChecked: boolean;
  stock: number;
  name: string;
  selectedPicker: number;
  picker: PickerData[];
  price: number;
  quantity: number;
};

export type OrderData = {
  id: string;
  storeName: string;
  deliveryOption: string;
  noOfItems: number;
  orderTotal: number;
  items: OrderItem[];
};

export type OrderItem = {
  id: string;
  image: string;
  selectedPickerLabel: string;
  selectedPickerValue: number;
  quantity: number;
  price: number;
  name: string;
};

export type BasketContext = {
  storeData: StoreData[];
};

export type CheckoutContext = {
  orderData: OrderData[];
  paymentMethod: string;
};

export type ShopEntryContext = {
  shopSettings: ShopSettingsForm;
  shopPayment: ShopPaymentForm;
  shopAddress: ShopAddressForm;
};

export type ProductEntryContext = {
  productForm: ProductForm;
  variationForm: VariationForm;
  availabilityForm: AvailabilityForm;
  wholesaleForm: WholesaleForm;
  shippingDetailsForm: ShippingDetailsForm;
};

export type ShopState = {
  shopEntryContext: ShopEntryContext;
  productEntryContext: ProductEntryContext;
  basketContext: BasketContext;
  checkoutContext: CheckoutContext;
  shopInfoResponse: ResponseState<ShopInfoResponse>;
  shopDeleteResponse: ResponseState<ShopDeleteResponse>;
  shopAddressResponse: ResponseState<ShopAddressResponse>;
  addProductResponse: ResponseState<AddProductResponse>;
  productListResponse: ResponseState<ProductListResponse>;
  categoryListResponse: ResponseState<CategoryListResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    shop: ShopState;
  }
}
