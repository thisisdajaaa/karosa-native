import {
  StyleProp,
  TextStyle as BaseTextStyle,
  ViewStyle,
  TextInputProps,
} from "react-native";

import { Props as InputProps } from "../../input/types";

type TextStyle = {
  left?: StyleProp<BaseTextStyle>;
  right?: StyleProp<BaseTextStyle>;
};

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
};

type AddressInput = {
  label: string;
  placeholder: string;
  value: string;
};

type SelectionData = {
  id: number;
  value: string;
};

export type AddressInputProps = {
  addressInput: AddressInput;
  style?: Style;
};

export type AddressSelectionProps = {
  name: string;
  data: Array<SelectionData>;
} & TextInputProps &
  InputProps;