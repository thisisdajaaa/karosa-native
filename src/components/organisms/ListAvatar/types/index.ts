/**
 *
 * @format
 *
 */

import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type Props = {
  title?: string;
  subTitle?: string;
  isActive?: boolean;
  rating?: string;
  followers?: string;
  following?: string;
  ButtonComponent?: React.ReactElement;
  IconComponent?: React.ReactElement;
  image?: ImageSourcePropType;
  style?: Style;
};
