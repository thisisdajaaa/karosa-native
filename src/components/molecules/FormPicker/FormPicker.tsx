/**
 *
 * FormPicker
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback, ReactText } from "react";
import { useField } from "formik";
import { Picker } from "@app/components/picker";
import { PickerData } from "@app/redux/api-models/common";

import type { PropsType } from "./types";

const FormPicker: FC<PropsType> = (props) => {
  const { name, data, placeholder } = props;
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<PickerData>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (itemValue: ReactText, itemindex: number) => {
      const value = { id: itemindex, value: itemValue } as PickerData;
      setCurrentValue(value);
      helpers.setValue(value);
    },
    [helpers]
  );

  return (
    <Picker
      onValueChange={handleChange}
      data={data}
      value={currentValue && currentValue.value}
      placeholder={placeholder}
    />
  );
};

export default FormPicker;
