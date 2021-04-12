import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required()
    .label("Email / Phone")
    .matches(/^[0-9]+$/, "Must be only digits"),
});

export default validationSchema;
