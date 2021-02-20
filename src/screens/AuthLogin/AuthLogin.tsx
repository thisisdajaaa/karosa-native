/**
 *
 * Login
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LoginRequest } from "@app/redux/auth/models";
import { actions, selectors } from "@app/redux/auth";
import { useAuth, useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";
import AuthLoginTemplate from "@app/components/templates/AuthLogin";
import routes from "@app/navigators/routes";

import LoginValidationSchema from "./validation";

const AuthLogin: FC = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const { isLoggedIn } = useAuth();

  const callLoginApi = useCallback(
    (request: LoginRequest) => dispatch(actions.callLoginApi.request(request)),
    [dispatch]
  );

  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const responseError = loginResponse.error?.message;

  useUpdateEffect(() => {
    if (isLoggedIn) {
      navigate(routes.ACCOUNTS_MAIN);
    }
  }, [isLoggedIn]);

  const handleSubmit = () => {
    const request: LoginRequest = {
      identifier: formikBag.values.identifier,
      password: formikBag.values.password,
    };

    callLoginApi(request);
  };

  const formInitValues = { identifier: "", password: "" };

  const formikBag = useFormik<LoginRequest>({
    initialValues: formInitValues,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: LoginValidationSchema,
    onSubmit: handleSubmit,
  });

  useUpdateEffect(() => {
    formikBag.setFieldError("password", "");

    if (responseError && !loginResponse.isLoading) {
      formikBag.setFieldError("identifier", " ");
      formikBag.setFieldError("password", responseError);
    }
  }, [responseError, loginResponse.isLoading]);

  const handleBack = useCallback(() => {
    navigate(routes.AUTH_MAIN);
  }, [navigate]);

  const loginButtonProps: SubmitButtonProps = {
    title: "Login",
    loading: loginResponse.isLoading,
  };

  const handleForgot = useCallback(() => {
    navigate(routes.AUTH_FORGOT);
  }, [navigate]);

  return (
    <FormikProvider value={formikBag}>
      <AuthLoginTemplate
        loginButtonProps={loginButtonProps}
        onForgot={handleForgot}
        onBack={handleBack}
      />
    </FormikProvider>
  );
};

export default AuthLogin;
