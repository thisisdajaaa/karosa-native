import { combineReducers } from "redux";
import produce, { Draft } from "immer";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";

import { ResponseState } from "../api-models/common";

import * as actions from "./actions";
import * as models from "./models";
import * as data from "./data";

export const categoryListResponse = produce(
  (
    draft: Draft<ResponseState<models.CategoryListResponse>>,
    action: ActionType<typeof actions>
  ) => {
    switch (action.type) {
      case getType(actions.callCategoryListApi.request):
        draft.isLoading = true;
        return draft;
      case getType(actions.callCategoryListApi.success):
        draft.response = action.payload;
        draft.isLoading = false;
        return draft;
      case getType(actions.callCategoryListApi.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        return draft;
      default:
        return draft;
    }
  },
  data.initCategoryState.categoryListResponse
);

const reducer = combineReducers({
  categoryListResponse,
});

export default reducer;
