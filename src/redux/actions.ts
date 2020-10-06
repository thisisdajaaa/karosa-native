import { createAction } from "typesafe-actions";

import * as types from "./types";

export const resetState = createAction(
  types.RESET_STATE,
  (resolve) => (key: string) => resolve(key)
);

export const resetAllState = createAction(
  types.RESET_ALL_STATE,
  (resolve) => (key: string) => resolve(key)
);
