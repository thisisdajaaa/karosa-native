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
  title: string;
  subTitle?: React.ReactElement | string;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactElement;
  style?: Style;
  chevron?: boolean;
  rightLabel?: string;
};
