/**
 *
 * Card
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Card as RnCard } from "react-native-elements";

import type { PropsType } from "./types";

const Card: FC<PropsType> = (props) => {
  const { children, containerStyle, wrapperStyle, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <RnCard containerStyle={containerStyle} wrapperStyle={wrapperStyle}>
        {children}
      </RnCard>
    </TouchableWithoutFeedback>
  );
};

export default Card;
