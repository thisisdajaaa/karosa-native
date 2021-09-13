/**
 *
 * FormCheckbox
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import Checkbox from "@app/atoms/Checkbox";

import type { PropsType } from "./types";

const FormCheckbox: FC<PropsType> = (props) => {
  const { label, name, uncheckedColor, onCheck } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useUpdateEffect(() => {
    helpers.setValue(currentValue);
  }, [currentValue]);

  const handlePress = useCallback(() => {
    setCurrentValue((prev: boolean) => !prev);
    helpers.setTouched(true);

    if (onCheck) onCheck();
  }, [helpers, onCheck]);

  return (
    <Checkbox
      value={currentValue}
      uncheckedColor={uncheckedColor}
      label={label}
      onPress={handlePress}
    />
  );
};

export default FormCheckbox;
