/**
 *
 * FormButton
 * @format
 *
 */

import React, { FC } from "react";
import { isEmpty, equals } from "ramda";
import { useFormikContext } from "formik";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";

const FormButton: FC<PropsType> = (props) => {
  const { title, loading, customStyle } = props;
  const {
    isValid,
    submitForm,
    touched,
    initialValues,
    values,
    errors,
  } = useFormikContext();

  const invalid =
    !isValid ||
    isEmpty(touched) ||
    equals(values, initialValues) ||
    !isEmpty(Object.values(errors));

  return (
    <Button
      title={title}
      disabled={invalid}
      onPress={submitForm}
      loading={loading}
      customStyle={customStyle}
    />
  );
};

export default FormButton;
