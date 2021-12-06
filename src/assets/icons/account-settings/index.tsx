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
  };

  return icons[name];
};

export default AccountSettingsIcons;
