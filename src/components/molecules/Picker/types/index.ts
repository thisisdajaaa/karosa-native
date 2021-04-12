/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";

export type PropsType = {
  data: PickerData[];
  placeholder: string;
  value: number;
  onValueChange(value: any, index: number): void;
  disabled?: boolean;
};
