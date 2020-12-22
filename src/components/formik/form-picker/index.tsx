import React, { useState, useEffect, useCallback, ReactText } from "react";
import { useField } from "formik";
import { Picker } from "@app/components/picker";

import { Props } from "./types";

export const FormPicker: React.FC<Props> = React.memo(
  ({ name, data, placeholder, returnType }) => {
    const [, meta, helpers] = useField(name);
    const [currentValue, setCurrentValue] = useState(
      meta.value || meta.initialValue
    );

    useEffect(() => {
      setCurrentValue(meta.value);
    }, [meta.value]);

    const handleChange = useCallback(
      (itemValue: ReactText, itemindex: number) => {
        const value = returnType === "string" ? itemValue : itemindex;
        setCurrentValue(value);
        helpers.setValue(value);
      },
      [helpers, returnType]
    );

    return (
      <React.Fragment>
        <Picker
          onValueChange={handleChange}
          data={data}
          value={currentValue}
          placeholder={placeholder}
        />
      </React.Fragment>
    );
  }
);
