/**
 *
 * FormQuantity
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { isNil } from "ramda";
import { useUpdateEffect } from "@app/hooks";
import Quantity from "@app/atoms/Quantity";

import type { PropsType } from "./types";

const FormQuantity: FC<PropsType> = (props) => {
  const { name, onDecrement, onIncrement } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<string>(
    isNil(meta.value) ? meta.initialValue : meta.value
  );

  useUpdateEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleIncrement = useCallback(() => {
    let tempValue = Number(currentValue);

    setCurrentValue(String(Number(currentValue) + 1));
    tempValue += 1;

    helpers.setValue(tempValue);
    helpers.setTouched(true);

    if (onIncrement) onIncrement();
  }, [helpers]);

  const handleDecrement = useCallback(() => {
    let tempValue = Number(currentValue);

    const decrease = () => {
      setCurrentValue(String(Number(currentValue) - 1));
      tempValue -= 1;
    };

    if (onDecrement) {
      Number(currentValue) <= 1 ? onDecrement() : decrease();

      helpers.setValue(tempValue);
      helpers.setTouched(true);
    }
  }, [helpers]);

  return (
    <Quantity
      {...props}
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
      value={String(currentValue)}
    />
  );
};

export default FormQuantity;
