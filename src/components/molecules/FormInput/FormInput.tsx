/**
 *
 * FormInput
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { isNil } from "ramda";
import { useUpdateEffect } from "@app/hooks";
import Input from "@app/atoms/Input";

import type { PropsType } from "./types";

const FormInput: FC<PropsType> = (props) => {
  const { name } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState(
    isNil(meta.value) ? meta.initialValue : meta.value
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

  return <Input {...props} value={currentValue} onChange={handleChange} />;
};

export default FormInput;
