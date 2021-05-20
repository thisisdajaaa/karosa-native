/**
 *
 * @format
 *
 */
import { StyleProp, ImageStyle, ImageSourcePropType } from "react-native";

export type PropsType = {
  customStyles?: StyleProp<ImageStyle>;
  imageSources: ImageSourcePropType[];
};
