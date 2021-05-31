import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .label("Password")
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Incorrect format"
    ),
});

export default validationSchema;
