/**
 *
 * @format
 *
 */
import { PickerData } from "@app/redux/api-models/common";

export type PropsType = {
  id: number;
  productName: string;
  productPrice: number;
  productImage: string;
  picker: PickerData[];
  checked: boolean;
  onCheckChange?(): void;
};
