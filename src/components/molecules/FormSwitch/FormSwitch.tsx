/**
 *
 * FormSwitch
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useField } from "formik";
import Switch from "@app/atoms/Switch";

import type { PropsType } from "./types";

const FormSwitch: FC<PropsType> = (props) => {
  const { name, disabled } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handleSwitch = useCallback(
    async (value: boolean) => {
      setCurrentValue(value);
      await helpers.setTouched(true);
    },
    [helpers]
  );

  return (
    <Switch onChange={handleSwitch} value={currentValue} disabled={disabled} />
  );
};

export default FormSwitch;
