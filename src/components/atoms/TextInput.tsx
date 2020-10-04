import React, { ChangeEvent } from "react";
import { View, TextInput as RNTextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import theme from "../../theme";

interface TextInputProps {
  icon?: string;
  width: string;
  otherProps: {
    [x: string]: unknown;
  };
  onBlur: () => void;
  onChangeText: (e: string | ChangeEvent<unknown>) => void;
}

function TextInput({ icon, width = "100%", ...otherProps }: TextInputProps) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.black}
          style={styles.icon}
        />
      )}
      <RNTextInput
        placeholderTextColor={theme.colors.placeholder}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    alignSelf: "center",
  },
  text: {
    flex: 1,
    fontSize: 14,
    padding: 15,
  },
});

export default TextInput;
