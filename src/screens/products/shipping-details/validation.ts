import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  weight: Yup.string().required().label("Weight per product"),
});
