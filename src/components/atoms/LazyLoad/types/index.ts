/**
 *
 * @format
 *
 */

import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  children: ReactElement | ReactElement[];
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
};
