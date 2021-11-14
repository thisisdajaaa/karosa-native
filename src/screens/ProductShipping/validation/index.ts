/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ShippingValidationSchema = Yup.object().shape({
  weight: Yup.string()
    .required("Weight is a required field")
    .matches(/^[1-9]+$/, "Must be a valid number")
    .min(1)
    .max(6),

  width: Yup.string()
    .required("Width is a required field")
    .matches(/^[1-9]+$/, "Must be a valid number")
    .min(1)
    .max(7),

  length: Yup.string()
    .required("Length is a required field")
    .matches(/^[1-9]+$/, "Must be a valid number")
    .max(5),

  height: Yup.string()
    .required("Height is a required field")
    .matches(/^[1-9]+$/, "Must be a valid number")
    .max(5),

  hasOneOption: Yup.boolean().oneOf([true]).required(),

  expressDelivery: Yup.boolean(),

  pickUpBuyer: Yup.boolean(),

  sellerCourier: Yup.boolean(),
});

export default ShippingValidationSchema;
