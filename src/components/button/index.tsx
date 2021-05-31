import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const AppButton: React.FC<Props> = ({
  title,
  onPress,
  icon,
  containerStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={onPress}
      disabled={disabled}>
      {icon?.left}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {icon?.right}
    </TouchableOpacity>
  );
};
