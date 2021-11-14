import { createAsyncAction } from "typesafe-actions";
import { ResponseError } from "@app/redux/api-models/common";

import * as types from "./types";
import * as models from "./models";

export const callCategoryListApi = createAsyncAction(
  types.ACT_CATEGORY_LIST_REQUEST,
  types.ACT_CATEGORY_LIST_SUCCESS,
  types.ACT_CATEGORY_LIST_FAILURE
)<undefined, models.CategoryListResponse, ResponseError>();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  callCategoryListApi,
};
