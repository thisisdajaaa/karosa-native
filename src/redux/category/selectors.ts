import { createSelector, Selector } from "reselect";
import { StateAll } from "@app/redux/types";

import { CategoryState } from "./models";
import { initCategoryState } from "./data";

export const rootSelector: Selector<StateAll, CategoryState> = (
  state: StateAll
) => state.category || initCategoryState;

export const getCategoryListResponse = () =>
  createSelector([rootSelector], (state: CategoryState) => {
    return state.categoryListResponse || initCategoryState.categoryListResponse;
  });

const selectors = {
  getCategoryListResponse,
};

export default selectors;
