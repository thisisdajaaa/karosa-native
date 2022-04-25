/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Product } from "@app/redux/api-models/common";

export type PropsType = {
  onReviews: () => void;
  onBack: () => void;
  onRecommended: (item: Product) => void;
  routeParams: Readonly<Product>;
};

export type ProductActionProps = {
  onVariations: () => void;
};

export type ProductHeaderProps = {
  onBack: () => void;
  name: string;
};

export type ProductRatingsProps = {
  onReviews: () => void;
};

export type ProductVariantProps = { sheetRef: RefObject<RBSheet> };
