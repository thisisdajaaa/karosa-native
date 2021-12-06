import { createAsyncAction } from "typesafe-actions";
import { ResponseError } from "@app/redux/api-models/common";

import * as types from "./types";
import {
  RegionResponse,
  ProvinceResponse,
  ProvinceRequest,
  CitiesResponse,
  CitiesRequest,
  BarangayResponse,
  BarangayRequest,
} from "./models";

export const callRegionApi = createAsyncAction(
  types.ACT_REGION_REQUEST,
  types.ACT_REGION_SUCCESS,
  types.ACT_REGION_FAILURE
)<undefined, RegionResponse, ResponseError>();

export const callProvinceApi = createAsyncAction(
  types.ACT_PROVINCE_REQUEST,
  types.ACT_PROVINCE_SUCCESS,
  types.ACT_PROVINCE_FAILURE
)<ProvinceRequest, ProvinceResponse, ResponseError>();

export const callCitiesApi = createAsyncAction(
  types.ACT_CITIES_REQUEST,
  types.ACT_CITIES_SUCCESS,
  types.ACT_CITIES_FAILURE
)<CitiesRequest, CitiesResponse, ResponseError>();

export const callBarangayApi = createAsyncAction(
  types.ACT_BARANGAY_REQUEST,
  types.ACT_BARANGAY_SUCCESS,
  types.ACT_BARANGAY_FAILURE
)<BarangayRequest, BarangayResponse, ResponseError>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callRegionApi,
  callProvinceApi,
  callBarangayApi,
  callCitiesApi,
};
