import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  min: Yup.string().required().label("Minimum Order"),
  max: Yup.string().required().label("Maximum Order"),
  unit: Yup.string().required().label("Unit Price"),
});
