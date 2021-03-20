/**
 *
 * FormInput
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import Input from "@app/atoms/Input";

import type { PropsType } from "./types";

const FormInput: FC<PropsType> = (props) => {
  const { name } = props;

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

  return <Input {...props} value={currentValue} onChange={handleChange} />;
};

export default FormInput;
