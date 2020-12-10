import React, { useState, useEffect, useCallback } from "react";

import { View } from "react-native";
import { BaseText } from "../../base-text";
import { DetailedAddressProps } from "./types";
import { styles } from "./styles";
import { TextInput } from "../../input";
import { useFormikContext, useField } from "formik";

export const DetailedAddressInput: React.FC<DetailedAddressProps> = ({
  name,
  detailedInput,
}) => {
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
    <View>
        <BaseText style={styles.hintStyle}>
          {detailedInput.label}
        </BaseText>
      <View>
        <TextInput
          placeholder={detailedInput.placeholder}
          value={currentValue}
          onChangeText={handleChange}
          customStyles={styles.customStyle}
        />
      </View>
    </View>
  );
};
