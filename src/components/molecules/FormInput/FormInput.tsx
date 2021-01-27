/**
 *
 * FormInput
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import Input from "@app/atoms/Input";

import type { PropsType } from "./types";

const FormInput: FC<PropsType> = (props) => {
  const { name } = props;

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

      if (validateOnChange) {
        await helpers.setValue(text);
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );

  return <Input value={currentValue} onChangeText={handleChange} {...props} />;
};

export default FormInput;
