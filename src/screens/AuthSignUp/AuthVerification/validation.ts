import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required()
    .label("otp")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6),
});
