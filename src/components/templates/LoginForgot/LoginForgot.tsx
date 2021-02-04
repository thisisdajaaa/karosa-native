/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC } from "react";
import { FormikContext } from "formik";

import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import LoginForgotStyles from "./styles";

const LoginForgot: FC<PropsType> = (props: PropsType) => {
  const {
    identifierProps,
    submitButtonProps,
    formikBag,
    customStyles,
    header,
  } = props;

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen customStyles={customStyles} header={header}>
        <BaseText customStyles={LoginForgotStyles.txtForgotPass}>
          Forgot Password ?
        </BaseText>
        <BaseText customStyles={LoginForgotStyles.txtResetPass}>
          You can reset your password here.
        </BaseText>

        <FormInput {...identifierProps} />
        <SubmitButton {...submitButtonProps} />
      </Screen>
    </FormikContext.Provider>
  );
};

LoginForgot.defaultProps = {
  customStyles: LoginForgotStyles.container,
  submitButtonProps: {
    title: "Submit",
    margin: 6,
  },
  identifierProps: {
    name: "identifier",
    placeholder: "Email / Phone",
  },
};

export default LoginForgot;
