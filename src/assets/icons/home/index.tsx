/**
 * HomeIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import RefreshIcon from "./refresh.svg";

const HomeIcons = (
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
    refreshIcon: (
      <RefreshIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default HomeIcons;
