import React, { useState, useEffect, useCallback } from "react";

import { View } from "react-native";
import { BaseText } from "../../base-text";
import { AddressInputProps } from "./types";
import { AddressInputStyle } from "./styles";
import { TextInput } from "../../input";
import { useFormikContext, useField } from "formik";

export const AddressInput: React.FC<AddressInputProps> = ({ name, addressInput }) => {
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();
  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    async (text: string) => {
      setCurrentValue(text);
      helpers.setValue(text);
    },
    [helpers, validateOnChange]
  );

  return (
    <View style={AddressInputStyle.labelContainer}>
      <BaseText style={AddressInputStyle.inputLabel}>
        {addressInput.label}
      </BaseText>
      <View style={AddressInputStyle.inputContainer}>
        <TextInput
          placeholder={addressInput.placeholder}
          value={currentValue}
          onChangeText={handleChange}
          style={AddressInputStyle.inputStyle}
          customStyles={{
            flexDirection: "column",
            borderWidth: 0,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
};
