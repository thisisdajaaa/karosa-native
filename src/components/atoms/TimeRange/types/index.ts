/**
 *
 * @format
 *
 */

import { ChangeText } from "@app/utils";
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  startValue: string;
  endValue: string;
  onStartTimeChange: ChangeText;
  onEndTimeChange: ChangeText;
  style?: StyleProp<ViewStyle>;
};
