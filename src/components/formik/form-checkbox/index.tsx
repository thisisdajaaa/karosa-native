import React, { useState, useEffect, useCallback } from "react";
import { useField } from "formik";
import { CheckBox } from "react-native-elements";
import { theme } from "@app/styles";

import { Props } from "./types";

export const FormCheckbox: React.FC<Props> = ({ label, name }) => {
  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<boolean>(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    helpers.setValue(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handlePress = useCallback(async () => {
    setCurrentValue((prev: boolean) => !prev);
    await helpers.setTouched(true);
  }, [helpers]);

  return (
    <React.Fragment>
      <CheckBox
        checked={currentValue}
        title={label}
        onPress={handlePress}
        checkedColor={theme.colors.primary}
        titleProps={{
          style: { ...theme.textRegular, fontWeight: "400", marginLeft: 8 },
        }}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
    </React.Fragment>
  );
};
