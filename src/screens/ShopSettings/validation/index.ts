/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ShopSettingsValidationSchema = Yup.object().shape({
  shopName: Yup.string().required().label("Shop Name"),

  coverPhoto: Yup.string().required(),

  avatarPhoto: Yup.string().required(),

  email: Yup.string().email().required().label("Email"),

  status: Yup.string()
    .oneOf(["active", "on vacation", "planting", "harvesting"])
    .required(),

  hasPayment: Yup.boolean().oneOf([true]).required(),
});

export default ShopSettingsValidationSchema;
