/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";

export type PropsType = {
  group: string;
  name: string;
  extraStyle?: StyleProp<TextStyle>;
  height?: number;
  width?: number;
};
