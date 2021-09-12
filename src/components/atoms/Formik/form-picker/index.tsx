import React, { useState, useEffect, useCallback, ReactText } from "react";
import { useField } from "formik";
import { PickerData } from "@app/redux/api-models/common";

import { Props } from "./types";

export const FormPicker: React.FC<Props> = React.memo(
  ({ name, data, placeholder }) => {
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

    return <React.Fragment />;
  }
);
