/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ShopSettingsValidationSchema = Yup.object().shape({
  shopName: Yup.string().required().label("Shop Name"),
});

export default ShopSettingsValidationSchema;
