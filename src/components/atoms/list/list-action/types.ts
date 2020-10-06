import {
  ImageSourcePropType,
  StyleProp,
  TextStyle as BaseTextStyle,
  ViewStyle,
} from "react-native";

type TextStyle = {
  left?: StyleProp<BaseTextStyle>;
  right?: StyleProp<BaseTextStyle>;
};

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
};

type Text = {
  left: string;
  right: string;
};

export type Props = {
  style?: Style;
  text: Text;
  action?: () => void;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactElement;
};
