/**
 *
 * FormPassword
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useUpdateEffect } from "@app/hooks";
import { useField, useFormikContext } from "formik";
import Password from "@app/atoms/Password";
import type { PropsType } from "./types";

const FormPassword: FC<PropsType> = (props) => {
  const { inputLength, name } = props;
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useUpdateEffect(() => {
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
    <Password
      value={currentValue}
      inputLength={inputLength}
      onChangeText={handleChange}
    />
  );
};

export default FormPassword;
