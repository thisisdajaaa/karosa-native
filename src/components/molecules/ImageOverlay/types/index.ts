/**
 *
 * @format
 *
 */
import {
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ImageOverlayPropsType = {
  source: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  viewTextStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
  hasOverlay?: boolean;
  onClick?: () => void;
};
