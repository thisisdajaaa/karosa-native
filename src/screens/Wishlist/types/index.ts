/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";

export type PickerValues = {
  filter: PickerData[];
};

export type PickerDisable = {
  regions: boolean;
  province: boolean;
  cities: boolean;
  barangay: boolean;
};
