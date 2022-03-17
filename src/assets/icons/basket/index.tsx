/**
 * BasketIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Store from "./store.svg";
import Voucher from "./voucher.svg";
import Trash from "./trash.svg";
import Message from "./message.svg";
import Empty from "./empty.svg";

const BasketIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    store: <Store style={extraStyle} height={height} width={width} />,
    trash: <Trash style={extraStyle} height={height} width={width} />,
    message: <Message style={extraStyle} height={height} width={width} />,
    voucher: <Voucher style={extraStyle} height={height} width={width} />,
    empty: <Empty style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default BasketIcons;
