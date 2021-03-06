/**
 *
 * FormSwitch
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import Switch from "@app/atoms/Switch";

import type { PropsType } from "./types";

const FormSwitch: FC<PropsType> = (props) => {
  const { name, disabled } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useUpdateEffect(() => {
    helpers.setValue(currentValue);
  }, [currentValue]);

  const handleSwitch = useCallback(
    (value: boolean) => {
      setCurrentValue(value);
      helpers.setTouched(true);
    },
    [helpers]
  );

  return (
    <Switch onChange={handleSwitch} value={currentValue} disabled={disabled} />
  );
};

export default FormSwitch;
