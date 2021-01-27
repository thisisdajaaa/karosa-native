/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions, StyleProp, ViewProps } from "react-native";

export type PropsType = {
  value: string;
  placeholder: string;
  onChange(text: string): void;
  customStyle?: StyleProp<ViewProps>;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
};
