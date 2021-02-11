import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required()
    .label("OTP")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits"),
});
