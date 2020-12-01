import { BaseText } from "@app/components/base-text";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Props } from "./types";

import { styles } from "./styles";
export const RadioButton: React.FC<Props> = ({ selected, label }) => {
  const [isSelected, setSelected] = useState(selected);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          setSelected(!isSelected);
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSelected && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: "#000",
                }}
              />
            )}
          </View>
          <BaseText style={styles.label}>{label}</BaseText>
        </View>
      </TouchableOpacity>
    </View>
  );
};
