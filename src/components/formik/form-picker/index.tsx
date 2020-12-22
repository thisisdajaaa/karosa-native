import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { Picker } from "@app/components/picker";

import { Props } from "./types";

export const FormPicker: React.FC<Props> = React.memo(
  ({ name, data, placeholder }) => {
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
        setCurrentValue(text);
        helpers.setValue(text);
      },
      [helpers, validateOnChange]
    );

    useEffect(() => {
      setCurrentValue(currentValue);
      helpers.setValue(currentValue);
    }, []);

    return (
      <React.Fragment>
        <Picker
          onChangeText={handleChange}
          data={data}
          placeholder={placeholder}
        />
      </React.Fragment>
    );
  }
);
