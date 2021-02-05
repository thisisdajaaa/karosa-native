/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions, StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  value: string;
  placeholder: string;
  onChange(text: string): void;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
};
