/**
 *
 * ValidationMessage
 * @format
 *
 */

import React, { FC } from "react";
import {
  ErrorMessage as FormikErrorMessage,
  ErrorMessageProps as PropsType,
} from "formik";
import Text from "@app/atoms/Text";

import ValidationMessageStyles from "./styles";

const ValidationMessage: FC<PropsType> = (props) => {
  const { name } = props;

  return (
    <FormikErrorMessage name={name}>
      {(msg) => <Text customStyle={ValidationMessageStyles.text} text={msg} />}
    </FormikErrorMessage>
  );
};

export default ValidationMessage;
