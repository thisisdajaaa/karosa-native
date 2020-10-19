import React from "react";
import { View, TextInput as BaseTextInput } from "react-native";
import { theme } from "@app/styles";

import { Props } from "./types";
import { styles } from "./styles";

export const TextInput: React.FC<Props> = ({ customStyles, ...props }) => {
  return (
    <View style={[styles.container, customStyles]}>
      <BaseTextInput
        placeholderTextColor={theme.colors.dark10}
        style={styles.text}
        {...props}
      />
    </View>
  );
};
