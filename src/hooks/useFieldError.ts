import { useMemo } from "react";
import { useField } from "formik";

const useFieldError = (name: string) => {
  const [, meta] = useField(name);

  const isError = useMemo(
    () => meta.touched && meta.error !== undefined,
    [meta.error, meta.touched]
  );

  return { isError };
};

export default useFieldError;
