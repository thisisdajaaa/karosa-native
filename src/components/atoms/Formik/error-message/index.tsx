import React from "react";
import {
  ErrorMessage as BaseErrorMessage,
  ErrorMessageProps as Props,
} from "formik";

import { BaseText } from "../../base-text";

import { styles } from "./styles";

export const ErrorMessage: React.FC<Props> = ({ name }) => {
  return (
    <BaseErrorMessage
      name={name}
      component={({ children }) => (
        <BaseText customStyles={styles.txtError}>{children}</BaseText>
      )}
    />
  );
};
