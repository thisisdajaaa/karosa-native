/**
 *
 * ValidationMessage
 * @format
 *
 */

import React, { FC } from "react";
import { ErrorMessage } from "formik";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ValidationMessageStyles from "./styles";

const ValidationMessage: FC<PropsType> = (props) => {
  const { name } = props;

  return (
    <ErrorMessage name={name}>
      {(msg) => <Text customStyle={ValidationMessageStyles.text} text={msg} />}
    </ErrorMessage>
  );
};

export default ValidationMessage;
