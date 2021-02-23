import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Icon = {
  left?: React.ReactElement | undefined;
  right?: React.ReactElement | undefined;
};

export type Props = {
  title?: string;
  icon?: Icon;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};
