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
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";

type InputOptions = "none" | "sentences" | "words" | "characters";

type AutoCompleteType =
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "email"
  | "name"
  | "password"
  | "postal-code"
  | "street-address"
  | "tel"
  | "username"
  | "off";

export type PropsType = {
  value: string;
  placeholder?: string;
  onChange?(text: string): void;
  onEndEditing?(e: NativeSyntheticEvent<TextInputEndEditingEventData>): void;
  inputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderColor?: string;
  disabled?: boolean;
  autoCorrect?: boolean;
  maxLength?: number;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  autoCompleteType?: AutoCompleteType;
  autoCapitalize?: InputOptions;
  secureTextEntry?: boolean;
};
