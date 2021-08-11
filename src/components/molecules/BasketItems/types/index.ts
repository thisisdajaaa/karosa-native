/**
 *
 * @format
 *
 */
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";
import { PropsType as CartItemProps } from "@app/organisms/CartItem/types";

export type StoreProps = {
  checked: boolean;
  listChevronType: ListChevronType;
  id: number;
};

export type PropsType = {
  storeProps: StoreProps;
  cartProps: CartItemProps[];
};
