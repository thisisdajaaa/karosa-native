/**
 *
 * @format
 *
 */

import { ImageURISource, StyleProp, ViewStyle } from "react-native";
import { AvatarIcon } from "react-native-elements";

type Size = "small" | "medium" | "large" | "xlarge" | number;

type Source = number | ImageURISource | ImageURISource[];

export type PropsType = {
  rounded?: boolean;
  activeOpacity?: number;
  source?: Source;
  title?: string;
  size?: Size;
  icon?: AvatarIcon;
  overlayContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};
