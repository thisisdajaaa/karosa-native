/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";

export type PropsType = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  hasBottomDivider?: boolean;
  data: PickerData[];
  disabled?: boolean;
};
