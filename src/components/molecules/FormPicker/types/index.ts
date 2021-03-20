/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";

export type PropsType = {
  name: string;
  data: PickerData[];
  placeholder: string;
  disabled?: boolean;
};
