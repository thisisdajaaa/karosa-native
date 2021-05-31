/**
 *
 * AuthVerification
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FormikContext, useFormik } from "formik";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import AuthVerificationTemplate from "@app/templates/AuthVerification";
import type { AuthRegistrationParams } from "@app/screens/AuthPhoneNumber/types";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const AuthVerificationScreen: FC = () => {
  const { navigate, goBack } = useNavigation();
  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthPhoneNumber">>();

  const formikBag = useFormik({
    initialValues: { otp: "", identifier: params.identifier },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_SET_PASSWORD,
        params: { otp: values.otp, identifier: values.identifier },
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
      <AuthVerificationTemplate onBack={handleBack} onHelp={handleHelp} />
    </FormikContext.Provider>
  );
};

export default AuthVerificationScreen;
