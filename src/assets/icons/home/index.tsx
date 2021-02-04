/**
 * HomeIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Refresh from "./refresh.svg";

const HomeIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    refresh: <Refresh style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default HomeIcons;
