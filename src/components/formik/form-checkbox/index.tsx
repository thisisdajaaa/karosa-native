import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { CheckBox } from "react-native-elements";
import { theme } from "@app/styles";

import { ErrorMessage } from "../error-message";

import { Props } from "./types";
import { styles } from "./styles";

export const FormCheckbox: React.FC<Props> = ({
  label,
  name,
  containerStyle,
}) => {
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handlePress = () => {
    setCurrentValue((prev: boolean) => !prev);
  };

  return (
    <React.Fragment>
      <CheckBox
        checked={currentValue}
        title={label}
        onPress={handlePress}
        checkedColor={theme.colors.primary}
        containerStyle={containerStyle ? containerStyle : styles.container}
      />
      <ErrorMessage name={name} />
    </React.Fragment>
  );
};
