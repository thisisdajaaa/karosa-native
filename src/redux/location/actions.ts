import { createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import { RegionResponse, ProvinceResponse, BarangayResponse } from "./models";

export const callRegionApi = createAsyncAction(
  types.ACT_REGION_REQUEST,
  types.ACT_REGION_SUCCESS,
  types.ACT_REGION_FAILURE
)<undefined, RegionResponse, Error>();

export const callProvinceApi = createAsyncAction(
  types.ACT_PROVINCE_REQUEST,
  types.ACT_PROVINCE_SUCCESS,
  types.ACT_PROVINCE_FAILURE
)<undefined, ProvinceResponse, Error>();

export const callBarangayApi = createAsyncAction(
  types.ACT_BARANGAY_REQUEST,
  types.ACT_BARANGAY_SUCCESS,
  types.ACT_BARANGAY_FAILURE
)<undefined, BarangayResponse, Error>();
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callRegionApi,
  callProvinceApi,
  callBarangayApi,
};
