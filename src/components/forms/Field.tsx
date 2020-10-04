import * as React from "react";
import { useFormikContext } from "formik";

import TextInput from "../atoms/TextInput";

import ErrorMessage from "./ErrorMessage";

interface FieldProps {
  name: string;
  width: string;
  otherProps: {
    [x: string]: unknown;
  };
}

interface FormkitContextValue {
  [key: string]: string;
}

function Field({ name, width, ...otherProps }: FieldProps) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext<
    FormkitContextValue
  >();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default Field;
