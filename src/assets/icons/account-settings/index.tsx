/**
 * AccountSettingsIcons
 * @format
 *
 */
import React from "react";
import { TextStyle, StyleProp } from "react-native";

import Coins from "./coins.svg";
import Followers from "./followers.svg";
import Twitter from "./twitter.svg";
import Fb from "./fb.svg";
import Instagram from "./instagram.svg";
import AddressPin from "./address-pin.svg";
import EmptyAddress from "./empty-address.svg";
import Edit from "./edit.svg";
import OutlineAddress from "./outline-address.svg";
import MapPin from "./map-pin.svg";

const AccountSettingsIcons = (
  name: string,
  extraStyle: StyleProp<TextStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    fb: <Fb style={extraStyle} height={height} width={width} />,
    coins: <Coins style={extraStyle} height={height} width={width} />,
    followers: <Followers style={extraStyle} height={height} width={width} />,
    twitter: <Twitter style={extraStyle} height={height} width={width} />,
    instagram: <Instagram style={extraStyle} height={height} width={width} />,
    addressPin: <AddressPin style={extraStyle} height={height} width={width} />,
    edit: <Edit style={extraStyle} height={height} width={width} />,
    mapPin: <MapPin style={extraStyle} height={height} width={width} />,
    outlineAddress: (
      <OutlineAddress style={extraStyle} height={height} width={width} />
    ),
    emptyAddress: (
      <EmptyAddress style={extraStyle} height={height} width={width} />
    ),
  };

  return icons[name];
};

export default AccountSettingsIcons;
