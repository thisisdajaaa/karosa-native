/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions, StyleProp, ViewStyle } from "react-native";

type InputOptions = "none" | "sentences" | "words" | "characters";

export type PropsType = {
  value: string;
  placeholder: string;
  onChange(text: string): void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  autoCapitalize?: InputOptions;
  secureTextEntry?: boolean;
  errorMessage?: string;
  errorStyle?: StyleProp<ViewStyle>;
};
