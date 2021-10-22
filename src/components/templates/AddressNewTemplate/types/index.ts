/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions } from "react-native";

export type PropsType = {
  details: string;
  inputProps: ListInputPropsType[];
};

export type ListInputPropsType = {
  variation: number;
  label: string;
  name: string;
  maxLen?: number;
  placeholder: string;
  required?: boolean;
  hasBottomDivider?: boolean;
  keyboardType?: KeyboardTypeOptions;
};
