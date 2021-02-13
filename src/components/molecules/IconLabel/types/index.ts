/**
 *
 * @format
 *
 */

import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  icon: ReactElement;
  title: string;
  subtitle: string;
  containerStyle?: StyleProp<ViewStyle>;
};
