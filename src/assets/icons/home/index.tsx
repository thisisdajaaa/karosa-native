/**
 * HomeIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Refresh from "./refresh.svg";
import Delivery from "./delivery-truck.svg";
import Discount from "./discount.svg";
import DiscountTag from "./discount-tag.svg";
import Location from "./location.svg";
import Sale from "./sale.svg";

const HomeIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    refresh: <Refresh style={extraStyle} height={height} width={width} />,
    delivery: <Delivery style={extraStyle} height={height} width={width} />,
    discount: <Discount style={extraStyle} height={height} width={width} />,
    discountTag: (
      <DiscountTag style={extraStyle} height={height} width={width} />
    ),
    location: <Location style={extraStyle} height={height} width={width} />,
    sale: <Sale style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default HomeIcons;
