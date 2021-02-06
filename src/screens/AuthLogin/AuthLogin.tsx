/**
 *
 * Login
 * @format
 *
 */

import React, { FC, useCallback } from "react";

import LoginTemplate from "@app/templates/Login";
import routes from "@app/navigators/routes";
import { useFormik } from "formik";
import { LoginRequest } from "@app/redux/auth/models";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/auth";
import { useAuth, useMemoizedSelector } from "@app/hooks";
import * as Yup from "yup";
import type { LOGIN_HEADER_PROPS as LoginProps } from "@app/constants";

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

  const headerProps: LoginProps = {
    iconName: "arrow-back",
    title: "Login",
    borderBottom: false,
    press: {
      left: () => navigate(routes.AUTH_MAIN),
    },
  };

  const onPress = () => {
    navigate(routes.AUTH_FORGOT);
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("Me");
    }
  }, [isLoggedIn]);

  return (
    <LoginTemplate
      loginButtonProps={{
        title: "Login",
        loading: false,
      }}
      onPress={onPress}
      formikBag={formikBag}
      description="I forgot my password"
      isLoading={loginResponse.isLoading}
      header={headerProps}
      identifierName={"identifier"}
      identifierPlaceholder={"Phone number / Username / Email"}
      passwordName={"password"}
      passwordPlaceholder={"Password"}
    />
  );
};

export default AuthLogin;
