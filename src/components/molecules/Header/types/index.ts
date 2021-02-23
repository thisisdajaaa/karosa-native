/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle } from "react-native";
import { HeaderSubComponent } from "react-native-elements";

type Placement = "left" | "center" | "right";

type BarStyle = "default" | "light-content" | "dark-content";

export type PropsType = {
  isCustom?: boolean;
  barStyle?: BarStyle;
  placement?: Placement;
  containerStyle?: StyleProp<ViewStyle>;
  leftComponent?: HeaderSubComponent;
  centerComponent?: HeaderSubComponent;
  rightComponent?: HeaderSubComponent;
};
