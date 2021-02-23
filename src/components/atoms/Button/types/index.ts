/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements";

type ButtonType = "solid" | "clear" | "outline";

export type PropsType = {
  title: string;
  onPress(): void;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;
};
