/**
 *
 * @format
 *
 */

import {
  PickerDisable,
  PickerValues,
} from "@app/screens/ShopEditAddress/types";

export type PropsType = {
  pickerValues: PickerValues;
  pickerDisable: PickerDisable;
  onBack(): void;
};
