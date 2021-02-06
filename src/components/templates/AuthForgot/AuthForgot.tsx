/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC } from "react";
import { FormikContext } from "formik";

import FormInput from "@app/molecules/FormInput";
import SubmitButton from "@app/molecules/FormButton";
import BaseText from "@app/atoms/Text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import AuthForgotStyles from "./styles";

const AuthForgot: FC<PropsType> = (props: PropsType) => {
  const {
    formikBag,
    customStyles,
    header,
    forgotDesc,
    resetDesc,
    submitButtonTitle,
    identifierName,
    identifierPlaceholder,
  } = props;

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen customStyles={customStyles} header={header}>
        <BaseText
          text={forgotDesc}
          customStyle={AuthForgotStyles.txtForgotPass}
        />
        <BaseText
          text={resetDesc}
          customStyle={AuthForgotStyles.txtResetPass}
        />

        <FormInput
          name={identifierName !== undefined ? identifierName : ""}
          placeholder={
            identifierPlaceholder !== undefined ? identifierPlaceholder : ""
          }
        />
        <SubmitButton
          title={submitButtonTitle !== undefined ? submitButtonTitle : ""}
        />
      </Screen>
    </FormikContext.Provider>
  );
};

AuthForgot.defaultProps = {
  customStyles: AuthForgotStyles.container,
  submitButtonTitle: "Submit",
  identifierPlaceholder: "Email / Phone",
};

export default AuthForgot;
