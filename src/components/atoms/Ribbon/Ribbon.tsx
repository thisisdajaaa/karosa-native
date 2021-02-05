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
import RibbonStyles from "./styles";

const Ribbon: FC<PropsType> = (props) => {
  const { upperText, lowerText } = props;

  return (
    <View>
      <Icon group="common" name="ribbon" height={37} width={30} />
      <View style={RibbonStyles.textContainer}>
        <Text customStyle={RibbonStyles.text} text={upperText!} />
        <Text customStyle={RibbonStyles.text} text={lowerText!} />
      </View>
    </View>
  );
};

export default Ribbon;
