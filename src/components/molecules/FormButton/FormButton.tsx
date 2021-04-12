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
  const { title, loading, buttonStyle } = props;
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
      disabled={invalid}
      title={title}
      onPress={submitForm}
      loading={loading}
      buttonStyle={buttonStyle}
    />
  );
};

export default FormButton;
