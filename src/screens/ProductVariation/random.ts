import { VariationForm, VariationItem } from "@app/redux/shop/models";
import { useFormik } from "formik";

export const useLmao = (
  variationData: VariationItem[],
  handleSubmit: (values: VariationForm) => void
) => {
  const formikBag = useFormik({
    initialValues: { variationData },
    onSubmit: handleSubmit,
  });

  return { formikBag };
};
