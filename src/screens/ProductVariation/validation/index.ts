/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const VariationValidationSchema = Yup.object().shape({
  variationData: Yup.array()
    .of(
      Yup.object().shape({
        variationName: Yup.string().label("Variation Name").required().max(30),

        hasImage: Yup.boolean(),

        options: Yup.array()
          .of(
            Yup.object().shape({
              optionName: Yup.string().label("Option Name").required().max(30),

              image: Yup.string().nullable(),
            })
          )
          .required()
          .min(1)
          .max(10),
      })
    )
    .required()
    .min(1)
    .max(2),
});

export default VariationValidationSchema;
