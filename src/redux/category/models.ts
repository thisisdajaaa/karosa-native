import { ResponseState } from "@app/redux/api-models/common";
import * as category from "@app/redux/api-models/category-list";

export type CategoryListResponse = category.Response;

export type CategoryState = {
  categoryListResponse: ResponseState<CategoryListResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    category: CategoryState;
  }
}
