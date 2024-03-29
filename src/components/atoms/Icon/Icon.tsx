/**
 *
 * Icon
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Icons from "@app/assets/icons";

import type { PropsType } from "./types";
import { ZERO } from "./config";

const Icon: FC<PropsType> = (props) => {
  const { group, name, extraStyle, height, width } = props;

  const icon = Icons[group](
    name,
    extraStyle,
    width ? width : ZERO,
    height ? height : ZERO
  );

  return <View>{icon}</View>;
};

export default Icon;
