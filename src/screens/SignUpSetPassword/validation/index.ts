import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().label("Password"),
});

export default validationSchema;
