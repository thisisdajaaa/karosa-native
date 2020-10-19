import React from "react";
import { useFormikContext } from "formik";
import { theme } from "@app/styles";

import { AppButton } from "../../button";

import { Props } from "./types";

export const SubmitButton: React.FC<Props> = ({ title, margin }) => {
  const { isValid, submitForm } = useFormikContext();

  return (
    <AppButton
      title={title}
      disabled={!isValid}
      onPress={submitForm}
      textStyle={{ color: !isValid ? theme.colors.dark10 : theme.colors.white }}
      containerStyle={{
        backgroundColor: !isValid ? theme.colors.light10 : theme.colors.primary,
        marginVertical: margin,
      }}
    />
  );
};
