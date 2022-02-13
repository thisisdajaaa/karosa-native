/**
 *
 * FormButton
 * @format
 *
 */

import React, { FC } from "react";
import { isEqual, isEmpty } from "lodash";
import { useFormikContext } from "formik";
import type { PropsType } from "@app/atoms/Button/types";
import Button from "@app/atoms/Button";

const FormButton: FC<PropsType> = (props) => {
  const { title, loading, buttonStyle } = props;
  const { isValid, submitForm, touched, initialValues, values, errors } =
    useFormikContext();

  const invalid =
    !isValid ||
    isEmpty(touched) ||
    isEqual(values, initialValues) ||
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
