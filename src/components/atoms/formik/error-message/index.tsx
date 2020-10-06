import React from "react";
import {
  ErrorMessage as BaseErrorMessage,
  ErrorMessageProps as Props,
} from "formik";

import { BaseText } from "../../base-text";

export const ErrorMessage: React.FC<Props> = ({ name }) => {
  return (
    <BaseErrorMessage
      name={name}
      component={({ children }) => (
        <BaseText
          customStyles={{ color: "#E81F1F", fontFamily: "SFProText-Regular" }}
        >
          {children}
        </BaseText>
      )}
    />
  );
};
