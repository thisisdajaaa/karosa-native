/**
 * CheckoutIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Location from "./location.svg";
import Delivery from "./delivery.svg";
import Coins from "./coins.svg";

const CheckoutIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    location: <Location style={extraStyle} height={height} width={width} />,
    delivery: <Delivery style={extraStyle} height={height} width={width} />,
    coins: <Coins style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default CheckoutIcons;
