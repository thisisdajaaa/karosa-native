import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

import { ResponseState } from "../api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const regionResponse = produce(
  (
    draft: Draft<ResponseState<models.RegionResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callRegionApi.request):
        draft.response = data.initLocationState.regionResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callRegionApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callRegionApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initLocationState.regionResponse
);

const reducer = combineReducers({
  regionResponse,
});

export default reducer;
