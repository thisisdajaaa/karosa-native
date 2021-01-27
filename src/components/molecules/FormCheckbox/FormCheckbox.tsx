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
  const { label, name } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handlePress = useCallback(async () => {
    setCurrentValue((prev: boolean) => !prev);
    await helpers.setTouched(true);
  }, [helpers]);

  return (
    <Checkbox checked={currentValue} title={label} onPress={handlePress} />
  );
};

export default FormCheckbox;
