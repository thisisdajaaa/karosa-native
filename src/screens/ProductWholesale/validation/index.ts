/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const WholesaleValidationSchema = Yup.object().shape({
  min: Yup.string()
    .matches(/^[1-9]+$/, "Must be a valid number")
    .max(6),

  max: Yup.string()
    .matches(/^[1-9]+$/, "Must be a valid number")
    .max(6),

  unit: Yup.string()
    .matches(/^[1-9]+$/, "Must be a valid number")
    .max(9),
});

export default WholesaleValidationSchema;
