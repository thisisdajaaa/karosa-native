/**
 *
 * @format
 *
 */

import { PropsType as InputType } from "@app/atoms/Input/types";

type Keys = "onChange" | "value";

export type PropsType = Omit<InputType, Keys> & {
  name: string;
};
