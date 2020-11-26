import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Full Name"),
  phoneNumber: Yup.string().required().label("Phone Number"),
});
