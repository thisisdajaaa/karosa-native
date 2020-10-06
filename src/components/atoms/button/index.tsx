import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
      disabled={disabled}
    >
      {icon?.left && <View style={styles.iconLeft}>{icon.left}</View>}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {icon?.right && <View style={styles.iconRight}>{icon.right}</View>}
    </TouchableOpacity>
  );
};
