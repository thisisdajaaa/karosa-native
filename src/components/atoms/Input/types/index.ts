/**
 *
 * @format
 *
 */

import {
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type InputOptions = "none" | "sentences" | "words" | "characters";

export type PropsType = {
  value: string;
  placeholder: string;
  onChange(text: string): void;
  inputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderColor?: string;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  autoCapitalize?: InputOptions;
  secureTextEntry?: boolean;
};
