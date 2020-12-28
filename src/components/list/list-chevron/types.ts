import { TextStyle, ViewStyle } from "react-native";

export type BaseProps = {
  title: string;
  listColor?: string;
  hasBottomDivider?: boolean;
  txtInfo?: string;
  required?: boolean;
  iconStyle?: TextStyle;
  txtInfoStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onPress: () => void;
};

export type AvatarProps = {
  title: string;
  subtitle: string;
  hasBottomDivider?: boolean;
  avatar?: string;
  onPress: () => void;
};
