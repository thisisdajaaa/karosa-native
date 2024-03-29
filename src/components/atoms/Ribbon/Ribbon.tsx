/**
 *
 * Ribbon
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { SIZE } from "./config";
import RibbonStyles from "./styles";

const Ribbon: FC<PropsType> = (props) => {
  const { upperText, lowerText } = props;

  return (
    <View>
      <Icon
        group="common"
        name="ribbon"
        height={SIZE.HEIGHT}
        width={SIZE.WIDTH}
      />
      <View style={RibbonStyles.textContainer}>
        <Text textStyle={RibbonStyles.text} text={upperText ? upperText : ""} />
        <Text textStyle={RibbonStyles.text} text={lowerText ? lowerText : ""} />
      </View>
    </View>
  );
};

export default Ribbon;
