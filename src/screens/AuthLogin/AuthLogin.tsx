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
import {
  useAuth,
  useMemoizedSelector,
  useMount,
  useToast,
  useUpdateEffect,
} from "@app/hooks";
import type { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";
import AuthLoginTemplate from "@app/templates/AuthLogin";
import routes from "@app/navigators/routes";

import LoginValidationSchema from "./validation";

const AuthLoginScreen: FC = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const { isLoggedIn } = useAuth();
  const { showToast, clearToastQueue } = useToast();

  const callLoginApi = useCallback(
    (request: LoginRequest) => dispatch(actions.callLoginApi.request(request)),
    [dispatch]
  );

  const setAuthBack = useCallback(
    (value: boolean) => dispatch(actions.setAuthBack(value)),
    [dispatch]
  );

  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const responseError = loginResponse.error;

  useUpdateEffect(() => {
    if (isLoggedIn) {
      clearToastQueue();
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
    validateOnBlur: false,
    validationSchema: LoginValidationSchema,
    onSubmit: handleSubmit,
  });

  useMount(() => setAuthBack(false));

  useUpdateEffect(() => {
    if (responseError === 400 && !loginResponse.isLoading && !isLoggedIn) {
      showToast({
        message: "Invalid Account or Password.",
        autoHideDuration: 3000,
        type: "error",
      });
    }
  }, [responseError, loginResponse.isLoading]);

  const handleBack = useCallback(() => {
    navigate(routes.HOME);
    setAuthBack(true);
  }, [navigate]);

  const loginButtonProps: FormButtonProps = {
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

export default AuthLoginScreen;
