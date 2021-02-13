/**
 *
 * Login
 * @format
 *
 */

import React, { FC, useEffect, useCallback } from "react";

import AuthLoginTemplate from "@app/components/templates/AuthLogin";
import routes from "@app/navigators/routes";
import { FormikProvider, useFormik } from "formik";
import { LoginRequest } from "@app/redux/auth/models";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/auth";
import { useAuth, useMemoizedSelector } from "@app/hooks";
import * as Yup from "yup";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";

import type { PropsType } from "./types";
import { useNavigation } from "@react-navigation/native";

const AuthLogin: FC<PropsType> = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const validationSchema = Yup.object().shape({
    identifier: Yup.string()
      .required()
      .label("Phone number / Username / Email"),
    password: Yup.string().required().label("Password"),
  });

  const callLoginApi = useCallback(
    (request: LoginRequest) => dispatch(actions.callLoginApi.request(request)),
    [dispatch]
  );

  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("Me");
    }
  }, [isLoggedIn]);

  const formikBag = useFormik({
    initialValues: { identifier: "", password: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const request: LoginRequest = {
        identifier: values.identifier,
        password: values.password,
      };

      callLoginApi(request);
    },
    validationSchema,
  });

  const handleBack = useCallback(() => {
    navigate(routes.AUTH_MAIN);
  }, [navigate]);

  const loginButtonProps: SubmitButtonProps = {
    title: "Login",
    loading: loginResponse.isLoading,
  };

  const onPress = useCallback(() => {
    navigate(routes.AUTH_FORGOT);
  }, [navigate]);

  return (
    <FormikProvider value={formikBag}>
      <AuthLoginTemplate
        loginButtonProps={loginButtonProps}
        onPress={onPress}
        onBack={handleBack}
      />
    </FormikProvider>
  );
};

export default AuthLogin;
