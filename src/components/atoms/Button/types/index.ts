/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements";

type ButtonType = "solid" | "clear" | "outline";
type Icon = {
  left?: React.ReactElement | undefined;
  right?: React.ReactElement | undefined;
};

export type PropsType = {
  title: string;
  onPress?: () => void;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;

  //from component/button type
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconVariationTwo?: Icon;

  // new
  variation?: number;
};
