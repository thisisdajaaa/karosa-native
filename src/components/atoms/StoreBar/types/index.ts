/**
 *
 * @format
 *
 */
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";

export type PropsType = {
  id: number;
  isChecked: boolean;
  onPress(): void;
  storeProps: ListChevronType;
};
