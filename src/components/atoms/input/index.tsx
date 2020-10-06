import React from "react";
import { View, TextInput as BaseTextInput } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const TextInput: React.FC<Props> = ({ customStyles, ...props }) => {
  return (
    <View style={[styles.container, customStyles]}>
      <BaseTextInput
        placeholderTextColor="#BDBDBD"
        style={styles.text}
        {...props}
      />
    </View>
  );
};
