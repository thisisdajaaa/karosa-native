/**
 *
 * FormImagePicker
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import ImagePicker from "@app/molecules/ImagePicker";

import type { PropsType } from "./types";

const FormImagePicker: FC<PropsType> = (props) => {
  const { name, variation } = props;
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (img: string) => {
      setCurrentValue(img);

      if (validateOnChange) {
        helpers.setValue(img);
        helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );

  return (
    <ImagePicker
      variation={variation}
      uri={currentValue}
      onChange={handleChange}
    />
  );
};

export default FormImagePicker;
