/**
 *
 * Card
 * @format
 *
 */

import React, { FC } from "react";
import { Card as RnCard } from "react-native-elements";

import type { PropsType } from "./types";

const Card: FC<PropsType> = (props) => {
  const { children, containerStyle, wrapperStyle } = props;

  return (
    <RnCard containerStyle={containerStyle} wrapperStyle={wrapperStyle}>
      {children}
    </RnCard>
  );
};

export default Card;
