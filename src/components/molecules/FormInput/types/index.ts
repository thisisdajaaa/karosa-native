/**
 *
 * @format
 *
 */

import { PropsType as InputType } from "@app/atoms/Input/types";

type KeysType = "onChange" | "value";

export type PropsType = Omit<InputType, KeysType> & {
  name: string;
};
