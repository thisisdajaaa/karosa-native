/**
 *
 * @format
 *
 */

import * as Yup from "yup";
import moment from "moment";

const ShopSettingsValidationSchema = Yup.object().shape({
  shopName: Yup.string().required().label("Shop Name"),

  coverPhoto: Yup.string().required(),

  avatarPhoto: Yup.string().required(),

  email: Yup.string().email().required().label("Email"),

  status: Yup.string()
    .oneOf(["active", "on vacation", "planting", "harvesting"])
    .required(),

  startTime: Yup.string()
    .required()
    .label("Start time")
    .test("start-time", "Please enter a valid start time", function (value) {
      const startTime = moment(value, "HH:mm", true);

      return startTime.isValid();
    }),

  endTime: Yup.string()
    .required()
    .label("End time")
    .test(
      "end-time",
      "Please enter a valid time for your shop",
      function (value) {
        const { startTime: baseStartTime } = this.parent;
        const startTime = moment(baseStartTime, "HH:mm", true);
        const endTime = moment(value, "HH:mm", true);

        return endTime.isSameOrAfter(startTime);
      }
    ),

  hasPayment: Yup.boolean().oneOf([true]).required(),
});

export default ShopSettingsValidationSchema;
