import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";
import { theme } from "@app/styles";
import { IonSelectionProps, Props } from "./types";

import { ErrorMessage } from "../error-message";
import { TextInput } from "../../input";

import { formInputStyle } from "../form-input/style";

export const FormInput: React.FC<Props> = React.memo(({ name, ...props }) => {
  const [, meta, helpers] = useField(name);
  const { validateOnChange, validateOnBlur } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    async (text: string) => {
      setCurrentValue(text);

      if (validateOnChange) {
        await helpers.setValue(text);
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );
  z;
  const handleBlur = useCallback(
    async (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      const { text } = event.nativeEvent;

      await helpers.setValue(text);

      if (validateOnBlur) {
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnBlur]
  );

  return (
    <React.Fragment>
      <TextInput
        value={currentValue}
        onBlur={(ev) => handleBlur(ev)}
        onChangeText={handleChange}
        customStyles={{
          borderColor:
            meta.touched && meta.error
              ? theme.colors.red15
              : theme.colors.dark30,
        }}
        {...props}
      />
      <ErrorMessage name={name} />
    </React.Fragment>
  );
});
