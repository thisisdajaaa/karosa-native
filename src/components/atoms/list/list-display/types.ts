import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

type Text = {
  left: string;
  right: string;
};

export type Props = {
  style?: Style;
  text: Text;
};
