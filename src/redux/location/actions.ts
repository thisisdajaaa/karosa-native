import { createAsyncAction } from "typesafe-actions";

import * as types from "./types";
import { RegionResponse } from "./models";

export const callRegionApi = createAsyncAction(
  types.ACT_REGION_REQUEST,
  types.ACT_REGION_SUCCESS,
  types.ACT_REGION_FAILURE
)<undefined, RegionResponse, Error>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callRegionApi,
};
