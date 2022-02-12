/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ShopPaymentValidationSchema = Yup.object().shape({
  hasOneOption: Yup.boolean().oneOf([true]).required(),

  cod: Yup.boolean(),

  gcash: Yup.boolean(),

  creditCard: Yup.boolean(),
});

export default ShopPaymentValidationSchema;
