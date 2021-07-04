/**
 *
 * @format
 *
 */

import { WithIcon } from "@app/utils";
import { StyleProp, TextStyle } from "react-native";

export type PropsType = {
  title: string;
  variation: number;
  listColor?: string;
  subtitle?: string;
  info?: string;
  chevronColor?: string;
  avatar?: string;
  hasBottomDivider?: boolean;
  required?: boolean;
  icon?: WithIcon;
  infoStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};
