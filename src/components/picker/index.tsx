import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Picker as ReactPicker } from "@react-native-picker/picker";
import { TextInput } from "@app/components/input";
import { theme } from "@app/styles";

import { styles } from "./styles";
import { Props } from "./types";

export const Picker: React.FC<Props> = React.memo(
  ({ data, placeholder, value, onValueChange }) => {
    const [selectedValue, setSelectedValue] = useState(value || placeholder);

    useEffect(() => {
      if (!value) {
        setSelectedValue(placeholder);
      }
    }, [placeholder, value]);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={String(selectedValue)}
          style={
            selectedValue === placeholder ? styles.hintStyle : styles.inputStyle
          }
          customStyles={styles.customStyle}
        />
        <ReactPicker
          mode="dialog"
          prompt={placeholder}
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            if (itemIndex > 0 && itemValue) {
              setSelectedValue(String(itemValue));
              if (onValueChange) {
                onValueChange(itemValue, itemIndex);
              }
            }
          }}
        >
          <ReactPicker.Item
            value={placeholder ? placeholder : ""}
            color={theme.colors.light10}
            key={-1}
            label={placeholder}
          />
          {data.map((targetData) => {
            return (
              targetData.value && (
                <ReactPicker.Item
                  value={targetData.value}
                  key={targetData.id}
                  label={targetData.value}
                />
              )
            );
          })}
        </ReactPicker>
      </View>
    );
  }
);
