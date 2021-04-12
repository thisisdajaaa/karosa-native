/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";
import { isEmpty } from "ramda";
import { Locations } from "../types";

export const PHONE_NUM_LENGTH = 11;

export const setPickerData = (responseData: Locations[]) => {
  const pickerData: PickerData[] = [];

  !isEmpty(responseData) &&
    responseData.map((data) => {
      pickerData.push({ value: data.id, label: data.name, key: data.id });
    });

  return pickerData;
};
