/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { IconNode } from "react-native-elements/dist/icons/Icon";

export type PropsType = {
  onPress(): void;
  id?: number;
  title: string;
  icon?: IconNode | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};
