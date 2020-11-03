import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { Props as BaseButtonProps } from "../../button/types";

export type Props = {
  title: string;
  margin?: number;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
} & BaseButtonProps;
