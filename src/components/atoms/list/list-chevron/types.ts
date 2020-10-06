import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type Props = {
  title: string;
  style?: Style;
  listColor?: string;
  rightLabel?: string;
};
