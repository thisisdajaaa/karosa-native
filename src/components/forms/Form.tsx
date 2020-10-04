import React from "react";
import { Formik, FormikConfig } from "formik";

function Form<TValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormikConfig<TValues>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
