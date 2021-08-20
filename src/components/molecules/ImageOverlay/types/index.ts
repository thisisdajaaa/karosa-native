/**
 *
 * @format
 *
 */
<<<<<<< HEAD
 import {
=======
import {
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from "react-native";

<<<<<<< HEAD
export type ImageOverlayPropsType = {
=======
export type PropsType = {
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
  source: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  viewTextStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
<<<<<<< HEAD
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
  hasOverlay?: boolean;
  onClick?: () => void;
=======
  textContent: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
};
