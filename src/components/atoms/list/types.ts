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
  subTitle?: string;
  image?: ImageSourcePropType;
  ButtonComponent?: React.ReactElement;
  IconComponent?: React.ReactElement;
  style?: Style;
  listColor?: string;
  chevron?: boolean;
  rightLabel?: string;
};
