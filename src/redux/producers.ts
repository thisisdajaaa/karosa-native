import produce, { Draft } from "immer";
import { ActionType, getType } from "typesafe-actions";

import { StateAll } from "./types";
import * as actions from "./actions";
/**
 * reset store with the specified key.
 * @param draft - draft.
 * @param action - action type.
 */
export const reset = produce(
  (draft: Draft<any>, action: ActionType<typeof actions>): StateAll => {
    if (action.type === getType(actions.resetState)) {
      draft[action.payload] = undefined;
    } else if (action.type === getType(actions.resetAllState)) {
      draft = {};
    }

    return draft;
  }
);
