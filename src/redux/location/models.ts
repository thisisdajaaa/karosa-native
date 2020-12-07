import * as region from "../api-models/location";
import * as province from "../api-models/province";
import * as barangay from "../api-models/barangay";

import { ResponseState } from "../api-models/common";

export type RegionResponse = region.Response;
export type ProvinceResponse = province.Response;
export type BarangayResponse = barangay.Response;

export type LocationState = {
  regionResponse: ResponseState<RegionResponse>;
  provinceResponse: ResponseState<ProvinceResponse>;
  barangayResponse: ResponseState<BarangayResponse>;
};

declare module "../types" {
  export interface StateAll {
    location: LocationState;
  }
}
