/**
 *
 * AuthPassword
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { actions } from "@app/redux/auth";
import { RegisterRequest } from "@app/redux/auth/models";
import { AuthRegistrationParams } from "@app/screens/AuthPhoneNumber/types";
import routes from "@app/navigators/routes";
import AuthPasswordTemplate from "@app/templates/AuthPassword";

import validationSchema from "./validation";

const AuthPasswordScreen: FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthVerification">>();

  const callRegisterApi = useCallback(
    (request: RegisterRequest) =>
      dispatch(actions.callRegisterApi.request(request)),
    [dispatch]
  );

  const formikBag = useFormik({
    initialValues: { password: "", identifier: params.identifier },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const request: RegisterRequest = {
        identifier: values.identifier,
        password: values.password,
      };
      callRegisterApi(request);
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
      <AuthPasswordTemplate onHelp={handleHelp} onBack={handleBack} />
    </FormikContext.Provider>
  );
};

export default AuthPasswordScreen;
