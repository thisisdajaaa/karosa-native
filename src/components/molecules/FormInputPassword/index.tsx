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
      async (text: string) => {
        setCurrentValue(text);
        helpers.setValue(text);
        if (validateOnChange) {
          await helpers.setValue(text);
          await helpers.setTouched(true);
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
