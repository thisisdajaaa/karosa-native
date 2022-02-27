/**
 *
 * @format
 *
 */

import * as yup from "yup";
import { COMMON } from "@app/constants";

const AddressNewSchema = yup.object({
  contactName: yup
    .string()
    .max(30)
    .matches(COMMON.REGEX.name, {
      excludeEmptyString: true,
      message: "Must be a valid name",
    })
    .required()
    .label("Contact Name"),

  contactNumber: yup
    .string()
    .required()
    .label("Contact Number")
    .matches(COMMON.REGEX.phoneNumber, "Must be a valid phone number"),

  label: yup.string().max(20).required().label("Label"),

  addressDetails: yup.string().max(200).required().label("Address Details"),

  noteRider: yup.string().max(200).label("Address Details"),

  hasLatLng: yup.boolean().oneOf([true]).required(),

  isDefault: yup.boolean(),
});

export default AddressNewSchema;
