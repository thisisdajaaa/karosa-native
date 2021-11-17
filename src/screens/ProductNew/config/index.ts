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
  AvailabilityForm,
} from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { formatDatePayload } from "@app/utils";

import type { ParameterType } from "../types";

export const RESPONSE_SUCCESS = 200;

const FIRST_CHARACTER = 0;
const SLICED_CHARACTER = 1;

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
      return "Available";
    case ENUM.Product_Status.Harvesting:
      return "Harvesting";
    default:
      return "Planting";
  }
};

export const addProductRequest = (
  product: ProductForm,
  availability: AvailabilityForm,
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

  const availabilityData = Object.keys(availability)
    .filter((item) => availability[item as keyof AvailabilityForm])
    .map(
      (item) =>
        item.charAt(FIRST_CHARACTER).toUpperCase() +
        item.slice(SLICED_CHARACTER)
    );

  const isUpcomingHarvest = product.upcomingHarvest;

  const getValue = (value: ParameterType) => {
    if (isUpcomingHarvest) return null;

    return value;
  };

  const estimatedDate =
    isUpcomingHarvest && product.estimateDate ? product.estimateDate : null;

  const bestBefore = formatDatePayload(getValue(product.shelfLife) as string);

  return {
    name: product.productNm,
    categoryId: Number(product.categoryId),
    description: product.description,
    upComingHarvest: isUpcomingHarvest,
    estimatedAvailableDate: formatDatePayload(estimatedDate) as string,
    bestBefore: bestBefore as string,
    productStatus: getValue(getStatus(product.status)) as string,
    availability: getValue(availabilityData) as string[],
    variations: getValue(variations) as Variation[],
    variationOptions: getValue(variationOptions) as VariationOption[],
  };
};
