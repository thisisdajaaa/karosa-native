import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

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
      case getType(actions.setUserLocation):
        draft.userLocation = action.payload;
        return draft;
      default:
        return draft;
    }
  },
  data.initAddressState.addressEntryContext
);

const reducer = combineReducers({
  addressEntryContext,
});

export default reducer;
