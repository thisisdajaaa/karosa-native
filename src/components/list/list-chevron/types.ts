import { TextStyle } from "react-native";

export type BaseProps = {
  title: string;
  listColor?: string;
  hasBottomDivider?: boolean;
  txtInfo?: string;
  required?: boolean;
  iconStyle?: TextStyle;
  txtInfoStyle?: TextStyle;
  onPress: () => void;
};

export type AvatarProps = {
  title: string;
  subtitle: string;
  hasBottomDivider?: boolean;
  avatar?: string;
  onPress: () => void;
};
