import React, { useState, useEffect } from "react";
import { Switch } from "react-native";
import { useField } from "formik";
import { theme } from "@app/styles";

import { Props } from "./types";

export const FormSwitch: React.FC<Props> = ({ name }) => {
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handleSwitch = (value: boolean) => {
    setCurrentValue(value);
  };

  return (
    <React.Fragment>
      <Switch
        trackColor={{ false: theme.colors.dark10, true: theme.colors.primary }}
        onValueChange={handleSwitch}
        value={currentValue}
      />
    </React.Fragment>
  );
};
