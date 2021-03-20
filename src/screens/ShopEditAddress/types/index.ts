/**
 *
 * @format
 *
 */

import { PickerData } from "@app/redux/api-models/common";
import * as province from "@app/redux/api-models/province";
import * as barangay from "@app/redux/api-models/barangay";
import * as cities from "@app/redux/api-models/cities";

export type ProvinceResponse = Omit<province.Province, "regionId">;
export type CitiesResponse = Omit<cities.City, "cityId">;
export type BarangayResponse = Omit<barangay.Barangay, "provinceId">;

export type Locations = ProvinceResponse | CitiesResponse | BarangayResponse;

export type LocationChoices = "cities" | "region" | "province" | "barangay";

export type PickerValues = {
  regions: PickerData[];
  province: PickerData[];
  cities: PickerData[];
  barangay: PickerData[];
};

export type PickerDisable = {
  regions: boolean;
  province: boolean;
  cities: boolean;
  barangay: boolean;
};
