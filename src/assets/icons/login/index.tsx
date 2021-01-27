/**
 * LoginIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import EmailIcon from "./email.svg";
import PhoneIcon from "./phone.svg";

const LoginIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
): ReactElement => {
  let widthProps = {};
  let heightProps = {};

  if (width) widthProps = { width };

  if (height) heightProps = { heightProps };

  const icons = {
    emailIcon: (
      <EmailIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    phoneIcon: (
      <PhoneIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default LoginIcons;
