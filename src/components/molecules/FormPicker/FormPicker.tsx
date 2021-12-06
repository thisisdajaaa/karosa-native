/**
 *
 * FormPicker
 * @format
 *
 */

import React, { FC, useState, useCallback, useEffect } from "react";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import Picker from "@app/molecules/Picker";

import type { PropsType } from "./types";

const FormPicker: FC<PropsType> = (props) => {
  const { name, data, placeholder, disabled } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<number>(
    meta.value || meta.initialValue
  );

  let mountedOn: number;

  useEffect(() => {
    mountedOn = Date.now();
  });

  useUpdateEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback((itemValue: number) => {
    setCurrentValue(itemValue);

    if (itemValue !== undefined && Date.now() - mountedOn > 100) {
      helpers.setValue(itemValue);
      helpers.setTouched(true);
    }
  }, []);

  return (
    <Picker
      onValueChange={handleChange}
      data={data}
      value={currentValue}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default FormPicker;
