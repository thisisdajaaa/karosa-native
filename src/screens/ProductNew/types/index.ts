/**
 *
 * @format
 *
 */

import { Variation, VariationOption } from "@app/redux/api-models/add-product";

export type ParameterType =
  | string
  | null
  | string[]
  | Variation[]
  | VariationOption[];

export type ProductNewNavigation = {
  onBack(): void;
  onCategory(): void;
  onShipping(): void;
  onWholesale(): void;
  onVariation(): void;
};

export type ProductNewSheetRefs = {
  status(): void;
  availability(): void;
};
