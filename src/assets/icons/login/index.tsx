/**
 * LoginIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Email from "./email.svg";
import Phone from "./phone.svg";

const LoginIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    email: <Email style={extraStyle} height={height} width={width} />,
    phone: <Phone style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default LoginIcons;
