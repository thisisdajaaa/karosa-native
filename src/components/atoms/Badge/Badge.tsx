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
  const { value, status, containerStyle, badgeStyle, textStyle } = props;

  return (
    <RnBadge
      value={value}
      status={status}
      containerStyle={containerStyle}
      badgeStyle={badgeStyle}
      textStyle={textStyle}
    />
  );
};

export default Badge;
