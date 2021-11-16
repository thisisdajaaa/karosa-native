/**
 *
 * @format
 *
 */

import * as Yup from "yup";
import moment from "moment";

const ProductNewValidationSchema = Yup.object().shape({
  productImages: Yup.array().of(Yup.string()).max(10),

  upcomingHarvest: Yup.boolean(),

  preOrder: Yup.boolean(),

  productNm: Yup.string()
    .label("Product Name")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string().required().max(30),
    }),

  description: Yup.string()
    .label("Product Description")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string().required().max(200),
    }),

  price: Yup.string()
    .label("Price")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string()
        .required()
        .matches(/^[1-9]+$/, "Must be a valid number")
        .min(1)
        .max(6),
    }),

  stocks: Yup.string()
    .label("Stocks")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string()
        .required()
        .matches(/^[1-9]+$/, "Must be a valid number")
        .min(1)
        .max(7),
    }),

  shelfLife: Yup.date()
    .label("Best Before")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.date().nullable(true),
      otherwise: Yup.date()
        .required()
        .typeError("Invalid Date")
        .transform(function (value, originalValue) {
          if (this.isType(value)) return value;

          const splitValue = originalValue.split("/");

          originalValue = [splitValue[2], splitValue[1], splitValue[0]].join(
            "-"
          );
          value = moment(originalValue, "YYYY-MM-DD");

          return value.isValid() ? value.toDate() : new Date("");
        })
        .test(
          "shelfLife",
          "Invalid Date",
          (value) => !moment(value).isBefore()
        ),
    }),

  estimateDate: Yup.date()
    .label("Upcoming Harvest")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.date()
        .required()
        .typeError("Invalid Date")
        .transform(function (value, originalValue) {
          if (this.isType(value)) return value;

          const splitValue = originalValue.split("/");

          originalValue = [splitValue[2], splitValue[1], splitValue[0]].join(
            "-"
          );
          value = moment(originalValue, "YYYY-MM-DD");

          return value.isValid() ? value.toDate() : new Date("");
        })
        .test(
          "estimateDate",
          "Invalid Date",
          (value) => !moment(value).isBefore()
        ),
      otherwise: Yup.date().nullable(true),
    }),

  status: Yup.string()
    .label("Status")
    .when("upcomingHarvest", {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string()
        .oneOf(["available", "planting", "harvesting"])
        .required(),
    }),

  hasShippingData: Yup.boolean().when("upcomingHarvest", {
    is: true,
    then: Yup.boolean().oneOf([true]).required(),
    otherwise: Yup.boolean(),
  }),

  categoryId: Yup.number().when("upcomingHarvest", {
    is: true,
    then: Yup.number().required(),
    otherwise: Yup.number(),
  }),
});

export default ProductNewValidationSchema;
