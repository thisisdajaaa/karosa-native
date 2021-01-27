/**
 *
 * FormImagePicker
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import ImagePicker from "@app/atoms/ImagePicker";

import type { PropsType } from "./types";

const FormImagePicker: FC<PropsType> = (props) => {
  const { name, children } = props;
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    async (img: string) => {
      setCurrentValue(img);

      if (validateOnChange) {
        await helpers.setValue(img);
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );

  return (
    <ImagePicker uri={currentValue} onChange={handleChange}>
      {children}
    </ImagePicker>
  );
};

export default FormImagePicker;
