import React, { useState, useEffect, useCallback } from "react";

import { View } from "react-native";
import { BaseText } from "../../base-text";
import { AddressInputProps } from "./types";
import { styles } from "./styles";
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
    <View style={styles.labelContainer}>
      <BaseText style={styles.inputLabel}>
        {addressInput.label}
      </BaseText>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={addressInput.placeholder}
          value={currentValue}
          onChangeText={handleChange}
          style={styles.inputStyle}
          customStyles={styles.customStyle}
        />
      </View>
    </View>
  );
};
