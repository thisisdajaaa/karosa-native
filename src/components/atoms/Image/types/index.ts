/**
 *
 * @format
 *
 */

import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";

export type PropsType = {
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  customStyle?: StyleProp<ImageStyle>;
};
