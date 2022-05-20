/**
 * CommonIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Back from "./back.svg";
import CameraGray from "./camera-gray.svg";
import CameraWhite from "./camera-white.svg";
import CameraGreen from "./camera-green.svg";
import Chat from "./chat.svg";
import GreenCircle from "./green-circle.svg";
import GrayCircle from "./gray-circle.svg";
import GoldCircle from "./gold-circle.svg";
import Close from "./close.svg";
import Karosa from "./karosa.svg";
import More from "./more.svg";
import OutlineHeart from "./outline-heart.svg";
import Ribbon from "./ribbon.svg";
import SettingsWhite from "./settings-white.svg";
import SolidHeart from "./solid-heart.svg";
import ToPay from "./to-pay.svg";
import ToRate from "./to-rate.svg";
import ToReceive from "./to-receive.svg";
import ToShip from "./to-ship.svg";
import Warning from "./warning.svg";
import Check from "./check.svg";
import Uncheck from "./uncheck.svg";
import Chevron from "./chevron.svg";
import GrayAddress from "./gray-address.svg";
import OutlineSetting from "./outline-settings.svg";
import EmptyStar from "./empty-star.svg";
import Star from "./star.svg";
import Account from "./account.svg";
import Account_Active from "./account_active.svg";
import Home from "./home.svg";
import Home_Active from "./home_active.svg";
import Notifications from "./notifications.svg";
import Notifications_Active from "./notifications_active.svg";
import Orders from "./orders.svg";
import Orders_Active from "./orders_active.svg";

const CommonIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    back: <Back style={extraStyle} height={height} width={width} />,
    emptyStar: <EmptyStar style={extraStyle} height={height} width={width} />,
    star: <Star style={extraStyle} height={height} width={width} />,
    chevron: <Chevron style={extraStyle} height={height} width={width} />,
    check: <Check style={extraStyle} height={height} width={width} />,
    uncheck: <Uncheck style={extraStyle} height={height} width={width} />,
    cameraGray: <CameraGray style={extraStyle} height={height} width={width} />,
    cameraWhite: (
      <CameraWhite style={extraStyle} height={height} width={width} />
    ),
    cameraGreen: (
      <CameraGreen style={extraStyle} height={height} width={width} />
    ),
    chat: <Chat style={extraStyle} height={height} width={width} />,
    greenCircle: (
      <GreenCircle style={extraStyle} height={height} width={width} />
    ),
    grayCircle: <GrayCircle style={extraStyle} height={height} width={width} />,
    goldCircle: <GoldCircle style={extraStyle} height={height} width={width} />,
    close: <Close style={extraStyle} height={height} width={width} />,
    karosa: <Karosa style={extraStyle} height={height} width={width} />,
    more: <More style={extraStyle} height={height} width={width} />,
    outlineHeart: (
      <OutlineHeart style={extraStyle} height={height} width={width} />
    ),
    ribbon: <Ribbon style={extraStyle} height={height} width={width} />,
    settingsWhite: (
      <SettingsWhite style={extraStyle} height={height} width={width} />
    ),
    solidHeart: <SolidHeart style={extraStyle} height={height} width={width} />,
    toPay: <ToPay style={extraStyle} height={height} width={width} />,
    toRate: <ToRate style={extraStyle} height={height} width={width} />,
    toReceive: <ToReceive style={extraStyle} height={height} width={width} />,
    toShip: <ToShip style={extraStyle} height={height} width={width} />,
    warning: <Warning style={extraStyle} height={height} width={width} />,
    outlineSetting: (
      <OutlineSetting style={extraStyle} height={height} width={width} />
    ),
    grayAddress: (
      <GrayAddress style={extraStyle} height={height} width={width} />
    ),
    account: <Account style={extraStyle} height={height} width={width} />,
    account_active: (
      <Account_Active style={extraStyle} height={height} width={width} />
    ),
    home: <Home style={extraStyle} height={height} width={width} />,
    home_active: (
      <Home_Active style={extraStyle} height={height} width={width} />
    ),
    notifications: (
      <Notifications style={extraStyle} height={height} width={width} />
    ),
    notifications_active: (
      <Notifications_Active style={extraStyle} height={height} width={width} />
    ),
    orders: <Orders style={extraStyle} height={height} width={width} />,
    orders_active: (
      <Orders_Active style={extraStyle} height={height} width={width} />
    ),
  };

  return icons[name];
};

export default CommonIcons;
