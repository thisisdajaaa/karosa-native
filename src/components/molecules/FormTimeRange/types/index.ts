/**
 *
 * @format
 *
 */

import { PropsType as TimeRangeType } from "@app/atoms/TimeRange/types";

type Keys = "onStartTimeChange" | "startValue" | "onEndTimeChange" | "endValue";

export type PropsType = Omit<TimeRangeType, Keys> & {
  startName: string;
  endName: string;
};
