/**
 * LoginIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import GreenBack from "./green-back.svg";
import GreenMessage from "./message.svg";
import GreenWallet from "./green-wallet.svg";
import WhiteWallet from "./white-wallet.svg";

const OrderFullfillmentIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    greenBack: <GreenBack style={extraStyle} height={height} width={width} />,
    greenMessage: (
      <GreenMessage style={extraStyle} height={height} width={width} />
    ),
    greenWallet: (
      <GreenWallet style={extraStyle} height={height} width={width} />
    ),
    whiteWallet: (
      <WhiteWallet style={extraStyle} height={height} width={width} />
    ),
  };

  return icons[name];
};

export default OrderFullfillmentIcons;
