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
import WhiteShip from "./white-ship.svg";
import GreenShip from "./green-ship.svg";
import WhiteBox from "./white-box.svg";
import GreenBox from "./green-box.svg";
import Chevron from "./chevron.svg";
import Store from "./store.svg";
import Peso from "./peso-icon.svg";
import Time from "./time.svg";
import DeliveryCompleted from "./delivery_completed.svg";
import IconCopy from "./icon_copy.svg";
import FastShip from "./fast-ship.svg";

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
    greenShip: <GreenShip style={extraStyle} height={height} width={width} />,
    whiteShip: <WhiteShip style={extraStyle} height={height} width={width} />,
    greenBox: <GreenBox style={extraStyle} height={height} width={width} />,
    whiteBox: <WhiteBox style={extraStyle} height={height} width={width} />,
    chevron: <Chevron style={extraStyle} height={height} width={width} />,
    store: <Store style={extraStyle} height={height} width={width} />,
    peso: <Peso style={extraStyle} height={height} width={width} />,
    time: <Time style={extraStyle} height={height} width={width} />,
    deliveryCompleted: (
      <DeliveryCompleted style={extraStyle} height={height} width={width} />
    ),
    iconCopy: <IconCopy style={extraStyle} height={height} width={width} />,
    fastShip: <FastShip style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default OrderFullfillmentIcons;
