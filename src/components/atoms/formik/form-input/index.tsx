import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";

import { ErrorMessage } from "../error-message";
import { TextInput } from "../../input";

import { Props } from "./types";
import { BaseText } from "../../base-text";
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

export const FormInput2: React.FC<Props> = React.memo(
  ({ name, value, placeholder, ...props }) => {
    // const [, meta, helpers] = useField(name);
    // const { validateOnChange, validateOnBlur } = useFormikContext();

    // const [currentValue, setCurrentValue] = useState(
    //   meta.value || meta.initialValue || value
    // );

    // useEffect(() => {
    //   setCurrentValue(meta.value);
    // }, [meta.value]);

    // const handleChange = useCallback(
    //   async (text: string) => {
    //     setCurrentValue(text);

    //     if (validateOnChange) {
    //       await helpers.setValue(text);
    //       await helpers.setTouched(true);
    //     }
    //   },
    //   [helpers, validateOnChange]
    // );

    // const handleBlur = useCallback(
    //   async (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    //     const { text } = event.nativeEvent;

    //     await helpers.setValue(text);

    //     if (validateOnBlur) {
    //       await helpers.setTouched(true);
    //     }
    //   },
    //   [helpers, validateOnBlur]
    // );

    return (
      <React.Fragment>
        <View style={formInputStyle.container}>
          <BaseText style={formInputStyle.TextStyle}>{name}</BaseText>
          <TextInput
            style={formInputStyle.textinputstyle}
            placeholder={placeholder}
            value={value}
            // onBlur={(ev) => handleBlur(ev)}
            customStyles={formInputStyle.box}
            {...props}
          />
        </View>
      </React.Fragment>
    );
  }
);
