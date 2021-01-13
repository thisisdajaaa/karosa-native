import React, { useState, useEffect, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { Password } from "@app/components/password";

import { Props } from "./types";

export const FormPassword: React.FC<Props> = React.memo(
  ({ name, inputLength }) => {
    const [, meta, helpers] = useField(name);
    const { validateOnChange } = useFormikContext();

    const [currentValue, setCurrentValue] = useState(
      meta.value || meta.initialValue
    );

    useEffect(() => {
      setCurrentValue(meta.value);
    }, [meta.value]);

    const handleChange = useCallback(
      (text: string) => {
        if (validateOnChange) {
          setCurrentValue(text);
          helpers.setValue(text);
          helpers.setTouched(true);
        }
      },
      [helpers, validateOnChange]
    );

    return (
      <React.Fragment>
        <Password
          value={currentValue}
          inputLength={inputLength}
          onChangeText={handleChange}
        />
      </React.Fragment>
    );
  }
);
