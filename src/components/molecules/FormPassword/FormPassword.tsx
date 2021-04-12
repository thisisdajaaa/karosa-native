/**
 *
 * FormPassword
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { Password } from "@app/components/password";

import type { PropsType } from "./types";
import { View } from "react-native";
import FormPasswordStyle from "./styles";

const FormPassword: FC<PropsType> = (props) => {
  const { inputLength, name } = props;
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (text: string) => {
      setCurrentValue(text);

      if (validateOnChange) {
        helpers.setValue(text);
        helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );
  return (
    <React.Fragment>
      <View style={FormPasswordStyle.container}>
        <Password
          value={currentValue}
          inputLength={inputLength}
          onChangeText={handleChange}
        />
      </View>
    </React.Fragment>
  );
};

export default FormPassword;
