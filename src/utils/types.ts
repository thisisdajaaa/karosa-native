import { RefObject } from "react";
import { FlatList } from "react-native";
import { Value } from "react-native-reanimated";

export type HeaderConfig = {
  heightExpanded: number;
  heightCollapsed: number;
};

export type ScrollPair = {
  list: RefObject<FlatList>;
  position: Value<number>;
};
