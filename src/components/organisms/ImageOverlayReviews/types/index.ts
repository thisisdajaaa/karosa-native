/**
 *
 * @format
 *
 */

<<<<<<< HEAD
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";

export type contentPropsType = {
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
  overlayProps: contentPropsType[];
};
=======
export type PropsType = {};
>>>>>>> 13889a2... fix(imageoverlay merge fixes): fixing merg errors
