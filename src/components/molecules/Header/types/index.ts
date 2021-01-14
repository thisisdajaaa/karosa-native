/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle } from "react-native";
import { HeaderSubComponent } from "react-native-elements";

type PlacementType = "left" | "center" | "right";

type BarStyleType = "default" | "light-content" | "dark-content";

export type PropsType = {
  isCustom?: boolean;
  barStyle?: BarStyleType;
  placement?: PlacementType;
  customStyle?: StyleProp<ViewStyle>;
  leftComponent?: HeaderSubComponent;
  centerComponent?: HeaderSubComponent;
  rightComponent?: HeaderSubComponent;
};
