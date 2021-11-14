/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const StockPriceValidationSchema = Yup.object().shape({
  variationData: Yup.array().of(
    Yup.object().shape({
      options: Yup.array().of(
        Yup.object().shape({
          price: Yup.string()
            .required("Price is a required field")
            .matches(/^[1-9]+$/, "Must be a valid number")
            .min(1)
            .max(6),

          stock: Yup.string()
            .required("Stock is a required field")
            .matches(/^[1-9]+$/, "Must be a valid number")
            .min(1)
            .max(7),

          weight: Yup.string()
            .matches(/^[1-9]+$/, {
              excludeEmptyString: true,
              message: "Must be a valid number",
            })
            .max(5),
        })
      ),
    })
  ),
});

export default StockPriceValidationSchema;
