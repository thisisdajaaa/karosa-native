import { StyleProp, TextProps, TextStyle } from "react-native";

export type Props = {
  customStyles?: StyleProp<TextStyle>;
} & TextProps;
