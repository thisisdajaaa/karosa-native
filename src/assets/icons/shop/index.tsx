/**
 * ShopIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import StarIcon from "./star.svg";

const ShopIcons = (
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
    starIcon: <StarIcon style={extraStyle} {...widthProps} {...heightProps} />,
  };

  return icons[name];
};

export default ShopIcons;
