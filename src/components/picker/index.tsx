import React, { useState } from "react";
import { View } from "react-native";
import { Picker as ReactPicker } from "@react-native-picker/picker";
import { TextInput } from "@app/components/input";
import { theme } from "@app/styles";

import { styles } from "./styles";
import { Props } from "./types";

export const Picker: React.FC<Props> = React.memo(
  ({ data, placeholder, value, onValueChange }) => {
    const [selectedValue, setSelectedValue] = useState<
      string | number | undefined
    >(value || placeholder);

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
            if (itemIndex > 0) {
              setSelectedValue(itemValue);
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
          {data.map((data) => (
            <ReactPicker.Item
              value={data.value}
              key={data.id}
              label={data.value}
            />
          ))}
        </ReactPicker>
      </View>
    );
  }
);
