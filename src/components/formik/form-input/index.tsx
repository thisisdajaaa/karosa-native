import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { theme } from "@app/styles";

import { TextInput } from "../../input";

import { Props } from "./types";

export const FormInput: React.FC<Props> = React.memo(({ name, ...props }) => {
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    async (text: string) => {
      setCurrentValue(text);

      if (validateOnChange) {
        await helpers.setValue(text);
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );

  return (
    <React.Fragment>
      <TextInput
        value={currentValue}
        onChangeText={handleChange}
        customStyles={{
          borderColor:
            meta.touched && meta.error
              ? theme.colors.red15
              : theme.colors.dark30,
        }}
        {...props}
      />
    </React.Fragment>
  );
});

FormInput.displayName = "FormInput";
