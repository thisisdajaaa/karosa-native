import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Email / Phone"),
});
