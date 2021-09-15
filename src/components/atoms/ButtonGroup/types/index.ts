/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  selected: number;
  buttons: string[];
  onPress: ([string]: any) => void;
  userContainerStyle?: StyleProp<ViewStyle>;
  userSelectedButtonStyle?: StyleProp<ViewStyle>;
  userSelectedTextStyle?: StyleProp<ViewStyle>;
  userStextStyle?: StyleProp<ViewStyle>;
};
