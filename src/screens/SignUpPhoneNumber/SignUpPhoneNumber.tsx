/**
 *
 * SignUpPhoneNumber
 * @format
 *
 */

import React, { FC } from "react";
import SignUpPhoneNumberTemplate from "@app/templates/SignUpPhoneNumber";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";
import { PropsType as FormInputProps } from "@app/molecules/FormInput/types";
import { FormikProvider, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const SignUpPhoneNumberScreen: FC = () => {
  const { navigate } = useNavigation();

  const formikBag = useFormik({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_OTP,
        params: { values },
      });
    },
    validationSchema,
  });

  const identifierProps: FormInputProps = {
    name: "identifier",
    placeholder: "Phone",
  };

  const nextButtonProps: SubmitButtonProps = {
    title: "Next",
  };

  return (
    <FormikProvider value={formikBag}>
      <SignUpPhoneNumberTemplate
        nextButtonProps={nextButtonProps}
        phoneNumberProps={identifierProps}
      />
    </FormikProvider>
  );
};

export default SignUpPhoneNumberScreen;
