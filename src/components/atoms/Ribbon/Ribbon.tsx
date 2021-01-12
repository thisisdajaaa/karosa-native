/**
 *
 * Ribbon
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import RibbonStyles from "./styles";

const Ribbon: FC<PropsType> = (props) => {
  const { upperText, lowerText } = props;

  return (
    <View style={RibbonStyles.baseContainer}>
      <View style={RibbonStyles.textContainer}>
        <Text customStyle={RibbonStyles.text} text={upperText} />
        <Text customStyle={RibbonStyles.text} text={lowerText} />
      </View>
      <View style={RibbonStyles.invertTriangleLeft} />
      <View style={RibbonStyles.invertTriangleRight} />
    </View>
  );
};

export default Ribbon;
