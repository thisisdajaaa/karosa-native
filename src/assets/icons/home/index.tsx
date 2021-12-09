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
import Chat from "./chat_outline.svg";
import Cart from "./cart_outline.svg";
import CartGreen from "./cart_green.svg";
import ChatGreen from "./chat_green.svg";
import Loop from "./loop.svg";
import ArrowBack from "./arrow_back.svg";

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
    chat: <Chat style={extraStyle} height={height} width={width} />,
    cart: <Cart style={extraStyle} height={height} width={width} />,
    loop: <Loop style={extraStyle} height={height} width={width} />,
    cart_green: <CartGreen style={extraStyle} height={height} width={width} />,
    chat_green: <ChatGreen style={extraStyle} height={height} width={width} />,
    arrow_back: <ArrowBack style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default HomeIcons;
