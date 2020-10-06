import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Props = {
  title: string;
  icon?: React.ReactElement | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};
