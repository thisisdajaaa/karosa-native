/**
 *
 * @format
 *
 */

import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";

export type OverlayPropsType = {
  source: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  viewTextStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
  hasOverlay?: boolean;
  onPress?: () => void;
};

export type PropsType = {
  overlayProps: OverlayPropsType[];
};
