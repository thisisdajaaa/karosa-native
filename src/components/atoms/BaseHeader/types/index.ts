/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";

type Press = {
  left?: VoidFunction;
  right?: VoidFunction;
};

type Text = {
  left?: string;
  right?: string;
};

type Style = {
  left?: StyleProp<TextStyle>;
  main?: StyleProp<TextStyle>;
  right?: StyleProp<TextStyle>;
};

export type Props = {
  title?: string;
  iconName?: string;
  borderBottom?: boolean;
  text?: Text;
  press?: Press;
  customStyles?: Style;
};
