/**
 *
 * @format
 *
 */

import { ENUM } from "@app/constants";
import { Variation, VariationOption } from "@app/redux/api-models/add-product";
import {
  ProductForm,
  VariationItem,
  AddProductRequest,
} from "@app/redux/shop/models";
import { theme } from "@app/styles";

export const RESPONSE_SUCCESS = 200;

export const statusInformation = (status: ENUM.Product_Status) => {
  let statusValue = "";
  let statusColor = "";

  switch (status) {
    case ENUM.Product_Status.Available:
      statusValue = "Available";
      statusColor = theme.colors.primary;
      break;
    case ENUM.Product_Status.Harvesting:
      statusValue = "Harvesting Season";
      statusColor = theme.colors.gold5;
      break;
    case ENUM.Product_Status.Planting:
      statusValue = "Planting Season";
      statusColor = theme.colors.dark5;
      break;
    default:
      statusValue = "Active";
      break;
  }

  return {
    statusValue,
    statusColor,
  };
};

const getStatus = (status: ENUM.Product_Status) => {
  switch (status) {
    case ENUM.Product_Status.Available:
      return 1;
    case ENUM.Product_Status.Harvesting:
      return 2;
    default:
      return 3;
  }
};

export const addProductRequest = (
  product: ProductForm,
  variationData: VariationItem[]
): AddProductRequest => {
  const variations: Variation[] = variationData
    .map((variation) =>
      variation.options.map((option) => {
        return {
          name: variation.variationName,
          option: option.optionName,
          price: Number(option.price),
          stock: Number(option.stock),
          weight: Number(option.weight),
        };
      })
    )
    .flat();

  const variationOptions: VariationOption[] = variationData.map((variation) => {
    return {
      name: variation.variationName,
      options: variation.options.map((option) => option.optionName),
    };
  });

  return {
    name: product.productNm,
    categoryId: 1, // temporary
    bestBefore: product.shelfLife,
    description: product.description,
    estimatedAvailableDate: product.estimateDate || "", // temporary
    productStatus: getStatus(product.status),
    upComingHarvest: product.upcomingHarvest,
    variations,
    variationOptions,
  };
};
