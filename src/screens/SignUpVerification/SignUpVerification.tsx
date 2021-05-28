/**
 *
 * SignUpVerification
 * @format
 *
 */

import React, { FC, useCallback } from "react";

import SignUpVerificationTemplate from "@app/templates/SignUpVerification";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const SignUpVerificationScreen: FC = () => {
  const { navigate, goBack } = useNavigation();
  const { values }: any = useRoute().params;

  const formikBag = useFormik({
    initialValues: { otp: "", phoneDigits: values.identifier },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_SET_PASSWORD,
        params: { values },
      });
    },
    validationSchema,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleHelp = useCallback(() => {
    navigate(routes.AUTH_HELP);
  }, [navigate]);

  return (
    <FormikContext.Provider value={formikBag}>
      <SignUpVerificationTemplate onBack={handleBack} onHelp={handleHelp} />
    </FormikContext.Provider>
  );
};

export default SignUpVerificationScreen;
