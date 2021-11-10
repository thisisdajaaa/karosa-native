/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ProductNewValidationSchema = Yup.object().shape({
  variationData: Yup.array().of(
    Yup.object().shape({
      variationName: Yup.string().label("Variation Name").required().max(30),

      hasImage: Yup.boolean(),

      options: Yup.array().of(
        Yup.object().shape({
          optionName: Yup.string().label("Option Name").required().max(30),

          image: Yup.string(),

          price: Yup.string()
            .required()
            .matches(/^[1-9]+$/, "Must be a valid number")
            .min(1)
            .max(6),

          stock: Yup.string()
            .required()
            .matches(/^[1-9]+$/, "Must be a valid number")
            .min(1)
            .max(7),

          weight: Yup.string()
            .matches(/^[1-9]+$/, "Must be a valid number")
            .max(5),
        })
      ),
    })
  ),
});

export default ProductNewValidationSchema;
