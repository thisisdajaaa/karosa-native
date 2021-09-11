/**
 * ProductsIcon
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Add from "./add.svg";
import Alert from "./alert.svg";
import Block from "./block.svg";
import ChevronDown from "./chevron-down.svg";
import Coupon from "./coupon.svg";
import Edit from "./edit.svg";
import ListBullet from "./list-bullet.svg";
import ListGrid from "./list-grid.svg";
import Remove from "./remove.svg";
import Share from "./share.svg";
import Sort from "./sort.svg";
import Warning from "./warning.svg";
import Shipping from "./shipping.svg";
import ChatNow from "./chatNow.svg";

const ProductsIcon = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    add: <Add style={extraStyle} height={height} width={width} />,
    alert: <Alert style={extraStyle} height={height} width={width} />,
    block: <Block style={extraStyle} height={height} width={width} />,
    chevronDown: (
      <ChevronDown style={extraStyle} height={height} width={width} />
    ),
    coupon: <Coupon style={extraStyle} height={height} width={width} />,
    edit: <Edit style={extraStyle} height={height} width={width} />,
    listBullet: <ListBullet style={extraStyle} height={height} width={width} />,
    listGrid: <ListGrid style={extraStyle} height={height} width={width} />,
    remove: <Remove style={extraStyle} height={height} width={width} />,
    share: <Share style={extraStyle} height={height} width={width} />,
    sort: <Sort style={extraStyle} height={height} width={width} />,
    warning: <Warning style={extraStyle} height={height} width={width} />,
    shipping: <Shipping style={extraStyle} height={height} width={width} />,
    chatNow: <ChatNow style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default ProductsIcon;
