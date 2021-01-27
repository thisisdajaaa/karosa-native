/**
 * BottomNavigationIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import HomeIcon from "./home.svg";
import BasketIcon from "./basket.svg";
import MeIcon from "./me.svg";

const BottomNavigationIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
): ReactElement => {
  let widthProps = {};
  let heightProps = {};

  if (width) widthProps = { width };

  if (height) heightProps = { heightProps };

  const icons = {
    homeIcon: <HomeIcon style={extraStyle} {...widthProps} {...heightProps} />,
    meIcon: <MeIcon style={extraStyle} {...widthProps} {...heightProps} />,
    basketIcon: (
      <BasketIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default BottomNavigationIcons;
