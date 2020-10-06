import React from "react";
import { useFormikContext } from "formik";

import { AppButton } from "../../button";

import { Props } from "./types";

export const SubmitButton: React.FC<Props> = ({ title, margin }) => {
  const { isValid, submitForm } = useFormikContext();

  return (
    <AppButton
      title={title}
      disabled={!isValid}
      onPress={submitForm}
      textStyle={{ color: !isValid ? "#BDBDBD" : "#fff" }}
      containerStyle={{
        backgroundColor: !isValid ? "#ECECEC" : "#0AA351",
        marginVertical: margin,
      }}
    />
  );
};
