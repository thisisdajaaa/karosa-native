/**
 *
 * @format
 *
 */

import { VariationItem, VariationOption } from "@app/redux/shop/models";

export type PropsType = {
  onBack(): void;
};

export type InputItemsProps = {
  item: VariationItem;
  option: VariationOption;
  variationKey: number;
  index: number;
};
