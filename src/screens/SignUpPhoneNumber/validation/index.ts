import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Phone number / Username / Email"),
  password: Yup.string().required().label("Password"),
});

export default validationSchema;
