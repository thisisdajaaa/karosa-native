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
<<<<<<< HEAD
export type ImageOverlayPropsType = {
=======
export type PropsType = {
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
=======
export type ImageOverlayPropsType = {
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
  source: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  viewTextStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
<<<<<<< HEAD
<<<<<<< HEAD
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
  hasOverlay?: boolean;
  onClick?: () => void;
<<<<<<< HEAD
=======
  textContent: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
=======
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
>>>>>>> 07efcee... style(imageoverlay): updated styling of ImageOverlay
=======
>>>>>>> e918c9f... fix(fix layout issues in variation): fix layout issues in variation
};
