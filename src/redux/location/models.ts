import * as region from "@app/redux//api-models/region";
import * as province from "@app/redux//api-models/province";
import * as barangay from "@app/redux//api-models/barangay";
import * as cities from "@app/redux//api-models/cities";
import { ResponseState } from "@app/redux//api-models/common";

export type RegionResponse = region.Response;
export type ProvinceResponse = province.Response;
export type ProvinceRequest = province.Request;
export type CitiesResponse = cities.Response;
export type CitiesRequest = cities.Request;
export type BarangayResponse = barangay.Response;
export type BarangayRequest = barangay.Request;

export type LocationState = {
  regionResponse: ResponseState<RegionResponse>;
  provinceResponse: ResponseState<ProvinceResponse>;
  barangayResponse: ResponseState<BarangayResponse>;
  citiesResponse: ResponseState<CitiesResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    location: LocationState;
  }
}
