import { ResponseState } from "redux/api-models/common";

import * as category from "../api-models/category-list";

export type CategoryListResponse = category.Response;

export type CategoryState = {
  categoryListResponse: ResponseState<CategoryListResponse>;
};

declare module "../types" {
  export interface StateAll {
    category: CategoryState;
  }
}
