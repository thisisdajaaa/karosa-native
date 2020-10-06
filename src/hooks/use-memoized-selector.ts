import { useMemo } from "react";
import { useSelector } from "react-redux";
import { OutputSelector } from "reselect";

import { StateAll } from "../redux/types";

export const useMemoizedSelector = <
  SelectorReturnType extends unknown,
  ResultFuncType extends unknown
>(
  selector: () => OutputSelector<StateAll, SelectorReturnType, ResultFuncType>
): SelectorReturnType => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSelector: any = useMemo(selector, []);
  return useSelector((state: StateAll) => memoizedSelector(state));
};
