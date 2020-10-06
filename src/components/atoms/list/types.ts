import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export type Props = {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactElement;
  customStyles?: StyleProp<ViewStyle>;
};
