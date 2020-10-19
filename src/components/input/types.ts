import { StyleProp, ViewStyle, TextInputProps } from "react-native";

export type Props = {
  customStyles?: StyleProp<ViewStyle>;
} & TextInputProps;
