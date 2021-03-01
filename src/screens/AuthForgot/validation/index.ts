/**
 *
 * @format
 *
 */

import * as Yup from "yup";

const ForgotValidationSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Email / Phone"),
});

export default ForgotValidationSchema;
