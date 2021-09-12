import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { ImagePicker } from "@app/components/image-picker";

import { Props } from "./types";

export const FormImage: React.FC<Props> = React.memo(({ name }) => {
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
    <React.Fragment>
      <ImagePicker imageUri={currentValue} onChangeImage={handleChange} />
    </React.Fragment>
  );
});

FormImage.displayName = "FormImage";
