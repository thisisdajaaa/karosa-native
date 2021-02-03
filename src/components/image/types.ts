import { StyleProp, ImageStyle, ImageSourcePropType } from "react-native";

export type Props = {
  customStyles?: StyleProp<ImageStyle>;
  imageSources: ImageSourcePropType[];
};
