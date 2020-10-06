import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../../config/styles";

import { Props } from "./types";

export const BaseText: React.FC<Props> = ({
  children,
  customStyles,
  ...otherProps
}) => {
  return (
    <Text style={[defaultStyles.text, customStyles]} {...otherProps}>
      {children}
    </Text>
  );
};
