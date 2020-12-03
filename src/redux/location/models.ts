import * as region from "../api-models/location";
import { ResponseState } from "../api-models/common";

export type RegionResponse = region.Response;

export type LocationState = {
  regionResponse: ResponseState<RegionResponse>;
};

declare module "../types" {
  export interface StateAll {
    location: LocationState;
  }
}
