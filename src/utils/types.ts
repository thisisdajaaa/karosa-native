import { RefObject } from "react";
import { FlatList } from "react-native";
import Animated from "react-native-reanimated";

export type HeaderConfig = {
  heightExpanded: number;
  heightCollapsed: number;
};

export type ScrollPair = {
  list: RefObject<FlatList>;
  position: Animated.SharedValue<number>;
};

export type Connection = {
  photo: string;
  name: string;
};

export type WithIcon = {
  group: string;
  name: string;
  height: number;
  width: number;
};
