/**
 * ShopIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Cancelled from "./cancelled.svg";
import Completed from "./completed.svg";
import Returned from "./returned.svg";

const ShopIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    cancelled: <Cancelled style={extraStyle} height={height} width={width} />,
    completed: <Completed style={extraStyle} height={height} width={width} />,
    returned: <Returned style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default ShopIcons;
