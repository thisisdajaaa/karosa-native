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

type Component = {
  LeftComponent?: React.ReactElement;
  RightComponent?: React.ReactElement;
};

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
};

type Text = {
  left?: string;
  right?: string;
};

type Icon = {
  left?: React.ReactElement;
  right?: React.ReactElement;
};

export type Props = {
  style?: Style;
  text?: Text;
  image?: ImageSourcePropType;
  icon?: Icon;
  structure?: Component;
  action?: () => void;
  onClick?: () => void;
};
