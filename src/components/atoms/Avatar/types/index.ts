/**
 *
 * @format
 *
 */

import { ImageURISource, StyleProp, ViewStyle } from "react-native";
import { AvatarIcon } from "react-native-elements";

type SizeType = "small" | "medium" | "large" | "xlarge" | number;

type SourceType = number | ImageURISource | ImageURISource[];

export type PropsType = {
  rounded?: boolean;
  activeOpacity?: number;
  source?: SourceType;
  title?: string;
  size?: SizeType;
  icon?: AvatarIcon;
  overlayContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};
