import React from "react";
import { Text } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const BaseText: React.FC<Props> = ({
  children,
  customStyles,
  ...otherProps
}) => {
  return (
    <Text style={[styles.text, customStyles]} {...otherProps}>
      {children}
    </Text>
  );
};
