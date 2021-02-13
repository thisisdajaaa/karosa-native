/**
 *
 * IconLabel
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import IconLabelStyles from "./styles";

const IconLabel: FC<PropsType> = (props) => {
  const { icon, title, subtitle } = props;

  return (
    <View style={IconLabelStyles.container}>
      {icon}
      <View style={IconLabelStyles.detailsContainer}>
        <Text text={title} customStyle={IconLabelStyles.title} />
        <Text text={subtitle} customStyle={IconLabelStyles.subtitle} />
      </View>
    </View>
  );
};

export default IconLabel;