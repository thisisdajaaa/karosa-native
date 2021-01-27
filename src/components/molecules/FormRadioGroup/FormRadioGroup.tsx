/**
 *
 * FormRadioGroup
 * @format
 *
 */

import React, { FC, Fragment, useState, useEffect, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import Radio from "@app/atoms/Radio";

import type { PropsType } from "./types";

const FormRadioGroup: FC<PropsType> = (props) => {
  const { name, options } = props;
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
    <Fragment>
      {options.map((option, index) => (
        <Fragment key={index}>
          <Radio
            checked={check.value === option.id}
            title={option.label}
            onPress={handlePress(option.id)}
          />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default FormRadioGroup;
