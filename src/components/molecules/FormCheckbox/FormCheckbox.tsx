/**
 *
 * FormCheckbox
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useField } from "formik";
import Checkbox from "@app/atoms/Checkbox";

import type { PropsType } from "./types";

const FormCheckbox: FC<PropsType> = (props) => {
  const { label, name, uncheckedColor } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
  }, [currentValue]);

  const handlePress = useCallback(() => {
    setCurrentValue((prev: boolean) => !prev);
    helpers.setTouched(true);
  }, [helpers]);

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
