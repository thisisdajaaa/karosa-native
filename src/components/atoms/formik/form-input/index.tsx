import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

import { ErrorMessage } from "../error-message";
import { TextInput } from "../../input";

import { Props } from "./types";

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
          borderColor: meta.touched && meta.error ? "#E81F1F" : "#4F4F4F",
        }}
        {...props}
      />
      <ErrorMessage name={name} />
    </React.Fragment>
  );
});
