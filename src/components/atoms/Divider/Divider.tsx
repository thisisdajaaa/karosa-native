/**
 *
 * Divider
 * @format
 *
 */

import React, { FC } from "react";
import { Divider as RnDivider } from "react-native-elements";

import type { PropsType } from "./types";

const Divider: FC<PropsType> = (props) => {
  const { style } = props;

  return <RnDivider style={style} />;
};

export default Divider;
