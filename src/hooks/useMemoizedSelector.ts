import { useMemo } from "react";
import { useSelector } from "react-redux";
import { OutputSelector } from "reselect";

import { StateAll } from "../redux/types";

const useMemoizedSelector = <
  SelectorReturnType extends unknown,
  ResultFuncType extends unknown
>(
  selector: () => OutputSelector<StateAll, SelectorReturnType, ResultFuncType>
): SelectorReturnType => {
  const memoizedSelector = useMemo(selector, []);
  return useSelector((state: StateAll) => memoizedSelector(state));
};

export default useMemoizedSelector;
