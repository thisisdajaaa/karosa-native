import React from "react";
import { View } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const Separator: React.FC<Props> = ({ containerStyle }) => {
  return <View style={[styles.separator, containerStyle]} />;
};
