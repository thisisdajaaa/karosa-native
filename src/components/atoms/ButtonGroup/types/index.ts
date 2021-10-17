import { ReactElement } from "react";
/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  selectedIndex: number;
  buttons: ReactElement[];
  onPress: ([string]: any) => void;
  userContainerStyle?: StyleProp<ViewStyle>;
  userSelectedButtonStyle?: StyleProp<ViewStyle>;
  userSelectedTextStyle?: StyleProp<ViewStyle>;
  userStextStyle?: StyleProp<ViewStyle>;
};
