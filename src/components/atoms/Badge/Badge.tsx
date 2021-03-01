/**
 *
 * Badge
 * @format
 *
 */

import React, { FC } from "react";
import { Badge as RnBadge } from "react-native-elements";

import type { PropsType } from "./types";

const Badge: FC<PropsType> = (props) => {
  const { value, status } = props;

  return <RnBadge value={value} status={status} />;
};

export default Badge;
