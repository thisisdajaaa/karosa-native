import React from "react";
import { isEmpty, equals } from "ramda";
import { useFormikContext } from "formik";
import { theme } from "@app/styles";

import Button from "@app/atoms/Button";

import { Props } from "./types";

export const SubmitButton: React.FC<Props> = ({ title, margin }) => {
  const { isValid, submitForm, touched, initialValues, values, errors } =
    useFormikContext();

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
      textStyle={{ color: invalid ? theme.colors.dark10 : theme.colors.white }}
      containerStyle={{
        backgroundColor: invalid ? theme.colors.light10 : theme.colors.primary,
        marginVertical: margin,
        minWidth: 330,
        width: "100%",
      }}
    />
  );
};
