import { StyleProp, TextStyle, ViewStyle } from "react-native";
/**
 *
 * @format
 *
 */

import { ReactNode } from "react";

export type Status = "error" | "primary" | "success" | "warning" | undefined;

export type PropsType = {
  value?: ReactNode;
  status?: Status;
  containerStyle?: StyleProp<ViewStyle>;
  badgeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
