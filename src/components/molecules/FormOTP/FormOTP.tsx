/**
 *
 * FormOTP
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import OTP from "@app/atoms/OTP";
import type { PropsType } from "./types";

const FormOTP: FC<PropsType> = (props) => {
  const { inputLength, name } = props;
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useUpdateEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (text: string) => {
      setCurrentValue(text);
      helpers.setValue(text);
      helpers.setTouched(true);
    },
    [helpers]
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
