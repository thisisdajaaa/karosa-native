/**
 *
 * @format
 *
 */

import { OrderData } from "@app/redux/shop/models";

export type PropsType = {
  onBack(): void;
};

export type CheckoutItemProps = {
  item: OrderData;
  storeIndex: number;
};
