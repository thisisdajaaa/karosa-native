/**
 *
 * FormOTP
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { useUpdateEffect } from "@app/hooks";
import OTP from "@app/atoms/OTP";
import type { PropsType } from "./types";

const FormOTP: FC<PropsType> = (props) => {
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
      if (validateOnChange) {
        setCurrentValue(text);
        helpers.setValue(text);
        helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );
  return (
    <OTP
      value={currentValue}
      inputLength={inputLength}
      onChangeText={handleChange}
    />
  );
};

export default FormOTP;
