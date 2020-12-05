import React, { useState, useEffect, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { CheckBox } from "react-native-elements";
import { theme } from "@app/styles";
import { Separator } from "@app/components/separator";

import { Props } from "./types";

export const FormRadioGroup: React.FC<Props> = ({
  name,
  options,
  hasSeparator,
}) => {
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();

  const [check, setCheck] = useState({
    value: meta.value || meta.initialValue,
  });

  useEffect(() => {
    setCheck({
      value: meta.value,
    });
  }, [meta.value]);

  const handlePress = useCallback(
    (val) => async () => {
      setCheck({ value: val });

      await helpers.setValue(val);

      if (validateOnChange) {
        await helpers.setTouched(true);
      }
    },
    [helpers, validateOnChange]
  );

  return (
    <React.Fragment>
      {options.map((option, key) => {
        return (
          <React.Fragment key={key}>
            <CheckBox
              checked={check.value === option.id}
              title={option.label}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={handlePress(option.id)}
              checkedColor={theme.colors.primary}
              titleProps={{
                style: {
                  ...theme.textRegular,
                  fontWeight: "400",
                  marginLeft: 8,
                },
              }}
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                margin: 0,
              }}
            />
            {hasSeparator && <Separator containerStyle={{ marginTop: 5 }} />}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
