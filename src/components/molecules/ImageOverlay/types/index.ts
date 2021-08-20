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
<<<<<<< HEAD
  textContent?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  imageWidth?: number;
  imageHeight?: number;
=======
  textContent: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
};
