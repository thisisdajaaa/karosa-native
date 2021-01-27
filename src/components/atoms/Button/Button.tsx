/**
 *
 * Button
 * @format
 *
 */

import React, { FC } from "react";
import { Button as RnButton } from "react-native-elements";

import { defaultOpacity } from "./config";
import type { PropsType } from "./types";
import ButtonStyles from "./styles";

const Button: FC<PropsType> = (props) => {
  const { title, type = "solid", disabled, loading, icon, customStyle } = props;

  return (
    <RnButton
      type={type}
      activeOpacity={defaultOpacity}
      raised
      icon={icon}
      title={title}
      loading={loading}
      disabled={disabled}
      buttonStyle={[ButtonStyles.container, customStyle]}
    />
  );
};

export default Button;
