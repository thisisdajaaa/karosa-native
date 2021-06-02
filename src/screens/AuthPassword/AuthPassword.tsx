/**
 *
 * AuthPassword
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FormikContext, useFormik } from "formik";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AuthRegistrationParams } from "@app/screens/AuthPhoneNumber/types";
import routes from "@app/navigators/routes";
import AuthPasswordTemplate from "@app/templates/AuthPassword";

import validationSchema from "./validation";

const AuthPasswordScreen: FC = () => {
  const { navigate, goBack } = useNavigation();

  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthPhoneNumber">>();

  const handleSubmit = () => {
    navigate("Stack", {
      screen: routes.AUTH_OTP,
      params: {
        password: formikBag.values.password,
        identifier: formikBag.values.identifier,
      },
    });
  };

  const formikBag = useFormik({
    initialValues: { identifier: params.identifier, password: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
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
      <AuthPasswordTemplate onHelp={handleHelp} onBack={handleBack} />
    </FormikContext.Provider>
  );
};

export default AuthPasswordScreen;
