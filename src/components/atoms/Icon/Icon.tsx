/**
 *
 * Icon
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import Icons from "@app/assets/icons";

import type { PropsType } from "./types";

const Icon: FC<PropsType> = (props) => {
  const { group, name, extraStyle, height, width } = props;

  const icon = Icons[group](
    name,
    extraStyle,
    width ? width : 0,
    height ? height : 0
  );

  return <Fragment>{icon}</Fragment>;
};

export default Icon;
