/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";
import { ChangeText } from "@app/utils";

export type PropsType = {
  value: string;
  onChange: ChangeText;
  placeholderColor?: string;
  style?: StyleProp<TextStyle>;
};
