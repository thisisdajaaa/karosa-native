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
import type { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";

import validationSchema from "./validation";
import { useAuth, useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { selectors, actions } from "@app/redux/auth";
import { RegisterRequest } from "@app/redux/auth/models";
import { useDispatch } from "react-redux";
import { generateRandomUsername } from "@app/utils";

const AuthVerificationScreen: FC = () => {
  const dispatch = useDispatch();

  const { navigate, goBack } = useNavigation();
  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthPassword">>();

  const { isLoggedIn } = useAuth();

  const registerResponse = useMemoizedSelector(selectors.getRegisterResponse);

  const callRegisterApi = useCallback(
    (request: RegisterRequest) =>
      dispatch(actions.callRegisterApi.request(request)),
    [dispatch]
  );

  useUpdateEffect(() => {
    if (isLoggedIn) {
      navigate(routes.ACCOUNTS_MAIN);
    }
  }, [isLoggedIn]);

  const handleSubmit = () => {
    const request: RegisterRequest = {
      username: generateRandomUsername(6),
      phoneNumber: formikBag.values.identifier,
      password: formikBag.values.password,
    };

    callRegisterApi(request);
  };

  const formikBag = useFormik({
    initialValues: {
      otp: "",
      identifier: params.identifier,
      password: params.password,
    },
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

  const btnRegisterProps: FormButtonProps = {
    title: "Next",
    loading: registerResponse.isLoading,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <AuthVerificationTemplate
        btnRegisterProps={btnRegisterProps}
        onBack={handleBack}
        onHelp={handleHelp}
      />
    </FormikContext.Provider>
  );
};

export default AuthVerificationScreen;
