/**
 *
 * @format
 *
 */

import { isNil } from "ramda";
import * as Yup from "yup";

import { PHONE_NUM_LENGTH } from "../config";

const ShopAddressValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Full Name"),
  phoneNumber: Yup.string()
    .required()
    .label("Phone Number")
    .max(PHONE_NUM_LENGTH)
    .min(PHONE_NUM_LENGTH),
  region: Yup.mixed().test(
    "region",
    "Region is a required field",
    (value) => !isNil(value)
  ),
  province: Yup.mixed().test(
    "province",
    "Province is a required field",
    (value) => !isNil(value)
  ),
  cities: Yup.mixed().test(
    "cities",
    "City is a required field",
    (value) => !isNil(value)
  ),
  barangay: Yup.mixed().test(
    "barangay",
    "Barangay is a required field",
    (value) => !isNil(value)
  ),
  detailedAddress: Yup.string().required().label("Detailed Address"),
});

export default ShopAddressValidationSchema;
