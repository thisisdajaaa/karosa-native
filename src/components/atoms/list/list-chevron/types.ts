import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type Props = {
  style?: Style;
  title: string;
  listColor?: string;
  rightLabel?: string;
  onPress: () => void;
};
