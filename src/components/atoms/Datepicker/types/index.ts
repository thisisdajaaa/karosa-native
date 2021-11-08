/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";

export type PropsType = {
  value: string;
  onChange(text: string): void;
  placeholderColor?: string;
  style?: StyleProp<TextStyle>;
};
