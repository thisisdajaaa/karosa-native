/**
 * LoginIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Email from "./email.svg";
import Phone from "./phone.svg";
import Facebook from "./facebook.svg";
import Google from "./google.svg";

const LoginIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    email: <Email style={extraStyle} height={height} width={width} />,
    phone: <Phone style={extraStyle} height={height} width={width} />,
    facebook: <Facebook style={extraStyle} height={height} width={width} />,
    google: <Google style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default LoginIcons;
