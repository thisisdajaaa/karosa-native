import React, { useState } from "react";
import { TextInput, View } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const Password: React.FC<Props> = ({
  inputLength,
  value,
  onChangeText,
}) => {
  const [currentValue, setValue] = useState<string>(value || "");

  return (
    <View style={[styles.container]}>
      {new Array(inputLength).fill(0).map((_v, index) => {
        return (
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={[
              styles.text,
              { opacity: currentValue?.charAt(index) ? 1 : 0.5 },
            ]}
            value={currentValue?.charAt(index) || ""}
            key={index}
          />
        );
      })}
      <TextInput
        maxLength={inputLength}
        onChangeText={(text) => {
          setValue(text);
          if (onChangeText) {
            onChangeText(text);
          }
        }}
        style={styles.hiddenText}
      />
    </View>
  );
};
