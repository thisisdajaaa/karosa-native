/**
 *
 * Button
 * @format
 *
 */

import React, { FC } from "react";
import { Button as RnButton } from "react-native-elements";

import type { PropsType } from "./types";

const Button: FC<PropsType> = (props) => {
  return <RnButton type="solid" {...props} />;
};

export default Button;
