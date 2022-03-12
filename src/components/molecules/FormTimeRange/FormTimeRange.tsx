/**
 *
 * FormTimeRange
 * @format
 *
 */

import React, { FC, useState, useCallback } from "react";
import { useField } from "formik";
import { isNil } from "lodash";
import { useUpdateEffect } from "@app/hooks";
import TimeRange from "@app/atoms/TimeRange";

import type { PropsType } from "./types";

const FormTimeRange: FC<PropsType> = (props) => {
  const { startName, endName } = props;

  const [, startMeta, startHelpers] = useField(startName);
  const [, endMeta, endHelpers] = useField(endName);

  const [currentStartValue, setCurrentStartValue] = useState(
    isNil(startMeta.value) ? startMeta.initialValue : startMeta.value
  );

  const [currentEndValue, setCurrentEndValue] = useState(
    isNil(endMeta.value) ? endMeta.initialValue : endMeta.value
  );

  useUpdateEffect(() => {
    setCurrentStartValue(startMeta.value);
  }, [startMeta.value]);

  useUpdateEffect(() => {
    setCurrentEndValue(endMeta.value);
  }, [endMeta.value]);

  const handleStartTimeChange = useCallback(
    (text: string) => {
      setCurrentStartValue(text);
      startHelpers.setValue(text);
      startHelpers.setTouched(true);
    },
    [startHelpers]
  );

  const handleEndTimeChange = useCallback(
    (text: string) => {
      setCurrentEndValue(text);
      endHelpers.setValue(text);
      endHelpers.setTouched(true);
    },
    [endHelpers]
  );

  return (
    <TimeRange
      {...props}
      startValue={currentStartValue}
      endValue={currentEndValue}
      onStartTimeChange={handleStartTimeChange}
      onEndTimeChange={handleEndTimeChange}
    />
  );
};

export default FormTimeRange;
