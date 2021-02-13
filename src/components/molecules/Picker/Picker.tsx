/**
 *
 * Picker
 * @format
 *
 */

import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import { Picker as RnPicker } from "@react-native-picker/picker";
import { theme } from "@app/styles";
import Input from "@app/atoms/Input";

import type { PropsType } from "./types";
import { LENGTH_ZERO } from "./config";
import PickerStyles from "./styles";

const Picker: FC<PropsType> = (props) => {
  const { data, placeholder, value, onValueChange } = props;

  const [selectedValue, setSelectedValue] = useState(value || placeholder);

  useEffect(() => {
    if (!value) {
      setSelectedValue(placeholder);
    }
  }, [placeholder, value]);

  return (
    <View style={PickerStyles.container}>
      <Input
        onChange={(_text) => 0}
        placeholder={placeholder ? placeholder : ""}
        value={String(selectedValue)}
        inputStyle={
          selectedValue === placeholder
            ? PickerStyles.hintStyle
            : PickerStyles.inputStyle
        }
        customStyle={PickerStyles.inputContainer}
      />
      <RnPicker
        mode="dialog"
        prompt={placeholder}
        style={PickerStyles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          if (itemIndex > LENGTH_ZERO && itemValue) {
            setSelectedValue(String(itemValue));
            if (onValueChange) {
              onValueChange(itemValue, itemIndex);
            }
          }
        }}>
        <RnPicker.Item
          value={placeholder ? placeholder : ""}
          color={theme.colors.light10}
          key={-1}
          label={placeholder ? placeholder : ""}
        />
        {data.map((targetData) => {
          return (
            targetData.value && (
              <RnPicker.Item
                value={targetData.value}
                key={targetData.id}
                label={targetData.value}
              />
            )
          );
        })}
      </RnPicker>
    </View>
  );
};

export default Picker;
