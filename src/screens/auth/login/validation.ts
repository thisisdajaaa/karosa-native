import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Phone number / Username / Email"),
  password: Yup.string().required().label("Password"),
});
