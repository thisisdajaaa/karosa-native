/**
 *
 * @format
 *
 */
import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  identifier: Yup.string().required().label("Email / Phone"),
});

export default VALIDATION_SCHEMA;
