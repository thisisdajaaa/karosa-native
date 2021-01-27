/**
 *
 * Icon
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import Icons from "@app/assets/icons";

import type { PropsType } from "./types";

const Icon: FC<PropsType> = (props) => {
  const { group, name, extraStyle, height, width } = props;

  const icon: ReactElement = Icons[group](name, extraStyle, width, height);

  return <Fragment>{icon}</Fragment>;
};

export default Icon;
