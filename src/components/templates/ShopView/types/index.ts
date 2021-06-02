/**
 *
 * @format
 *
 */

import { ViewProps } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

export type PropsType = {
  onBack(): void;
};

export type HeaderProps = Pick<ViewProps, "style"> & {
  onBack(): void;
};

export type ActiveLink = "Popular" | "Latest" | "Price";

export type TabBarProps = MaterialTopTabBarProps & {
  onIndexChange?: (index: number) => void;
};
