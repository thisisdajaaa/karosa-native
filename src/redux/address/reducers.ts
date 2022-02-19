import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";
import { ResponseState } from "@app/redux/api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const addressEntryContext = produce(
  (
    draft: Draft<models.AddressEntryContext>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.setNewAddress):
        draft.newAddressForm = action.payload;
        return draft;
      case getType(actions.setUserCoordinates):
        draft.userCoordinates = action.payload;
        return draft;
      case getType(actions.setAddressCoordinates):
        draft.newAddressForm.coords = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  data.initAddressState.addressEntryContext
);

export const geocoderResponse = produce(
  (
    draft: Draft<ResponseState<models.GeocoderResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callGeocoderApi.request):
        draft.response = data.initAddressState.geocoderResponse.response;
        draft.isLoading = true;
        return draft;
      case getType(actions.callGeocoderApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callGeocoderApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initAddressState.geocoderResponse
);

const reducer = combineReducers({
  addressEntryContext,
  geocoderResponse,
});

export default reducer;
