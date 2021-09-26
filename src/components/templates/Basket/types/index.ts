/**
 *
 * @format
 *
 */

import { StoreData } from "@app/redux/shop/models";

export type PropsType = {
  onBack(): void;
};

export type BasketItemQuantityProps = {
  index: number;
  storeItemKey: number;
  handleRemove(): void;
};

export type BasketItemProps = {
  item: StoreData;
  storeIndex: number;
};
