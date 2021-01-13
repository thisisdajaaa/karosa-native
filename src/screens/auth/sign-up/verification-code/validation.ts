import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  otp: Yup.string().required().label("OTP"),
});
