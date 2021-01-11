/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";

type EllipsizeModeType = "head" | "middle" | "tail" | "clip";

export type PropsType = {
  text: string;
  customStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: EllipsizeModeType;
};
