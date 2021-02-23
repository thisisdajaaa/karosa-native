/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions } from "react-native";

export type PropsType = {
  variation: number;
  label: string;
  name: string;
  maxLen?: number;
  placeholder: string;
  required?: boolean;
  hasBottomDivider?: boolean;
  keyboardType?: KeyboardTypeOptions;
};
