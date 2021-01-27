/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements";

type ButtonType = "solid" | "clear" | "outline";

export type PropsType = {
  title: string;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;
};
