import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Full Name"),
  phoneNumber: Yup.string().required().label("Phone Number"),
  region: Yup.string().required().label("Region"),
  province: Yup.string().required().label("Province"),
  // barangay: Yup.string().required().label("Barangay"),
  cities: Yup.string().required().label("City"),
  detailedAddress: Yup.string().required().label("Detailed Address"),
});
