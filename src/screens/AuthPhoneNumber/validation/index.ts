import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required()
    .label("Phone Number")
    .max(11)
    .matches(/^[0-9]+$/, "Must be only digits"),
});

export default validationSchema;
