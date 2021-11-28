/**
 *
 * @format
 *
 */

import { WithIcon } from "@app/utils";
import { StyleProp, TextStyle } from "react-native";

export type PropsType = {
  title: string;
  variation?: number;
  listColor?: string;
  subtitle?: string;
  info?: string;
  chevronColor?: string;
  avatar?: string;
  hasBottomDivider?: boolean;
  required?: boolean;
  infoStyle?: StyleProp<TextStyle>;
  iconGroup?: string;
  iconName?: string;
  iconWidth?: number;
  iconHeight?: number;
  onPress: () => void;
  hasChevron?: boolean;
  icon?: WithIcon;
  titleStyle?: StyleProp<TextStyle>;
};
