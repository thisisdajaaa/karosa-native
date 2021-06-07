/**
 *
 * Button
 * @format
 *
 */
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { PropsType as Props } from "./types";
import { stylesVarTwo as styles } from "./styles";

const VariationTwo: React.FC<Props> = ({
  title,
  onPress,
  iconVariationTwo,
  containerStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={onPress}
      disabled={disabled}>
      {iconVariationTwo?.left}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {iconVariationTwo?.right}
    </TouchableOpacity>
  );
};

export default VariationTwo;
