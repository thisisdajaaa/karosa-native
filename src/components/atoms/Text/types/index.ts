/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";

type EllipsizeMode = "head" | "middle" | "tail" | "clip";

export type PropsType = {
  text: string;
  customStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: EllipsizeMode;
};
