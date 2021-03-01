/**
 * BottomNavigationIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Basket from "./basket.svg";
import Home from "./home.svg";
import Me from "./me.svg";

const BottomNavigationIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    basket: <Basket style={extraStyle} height={height} width={width} />,
    home: <Home style={extraStyle} height={height} width={width} />,
    me: <Me style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default BottomNavigationIcons;
