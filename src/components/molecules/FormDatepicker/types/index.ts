/**
 *
 * @format
 *
 */

import { PropsType as DatepickerType } from "@app/atoms/Datepicker/types";

type Keys = "onChange" | "value";

export type PropsType = Omit<DatepickerType, Keys> & {
  name: string;
};
