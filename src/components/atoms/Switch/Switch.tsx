/**
 *
 * Switch
 * @format
 *
 */

import React, { FC } from "react";
import { Switch as RnSwitch } from "react-native";

import type { PropsType } from "./types";
import { COLOR } from "./config";

const Switch: FC<PropsType> = (props) => {
  const { value, disabled, onChange } = props;

  return (
    <RnSwitch
      trackColor={COLOR}
      onValueChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};

export default Switch;
