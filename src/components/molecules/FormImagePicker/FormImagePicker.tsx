/**
 *
 * FormImagePicker
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import ImagePicker from "@app/molecules/ImagePicker";

import type { PropsType } from "./types";

const FormImagePicker: FC<PropsType> = (props) => {
  const { name, variation } = props;
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useUpdateEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (img: string) => {
      setCurrentValue(img);

      helpers.setValue(img);
      helpers.setTouched(true);
    },
    [helpers]
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
