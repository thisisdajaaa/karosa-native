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

export type PropsType = {
  source: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  viewTextStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textContent: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
};
