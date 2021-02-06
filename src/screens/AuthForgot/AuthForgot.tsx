/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { ForgotRequest } from "@app/redux/auth/models";
import { actions } from "@app/redux/auth";
import AuthForgotTemplate from "@app/templates/AuthForgot";
import routes from "@app/navigators/routes";
import type { LoginForgotHeaderProps } from "@app/templates/AuthForgot/types";

import VALIDATION_SCHEMA from "./config";
import type { PropsType } from "./types";

const LoginForgot: FC<PropsType> = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const callForgotApi = useCallback(
    (request: ForgotRequest) =>
      dispatch(actions.callForgotApi.request(request)),
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    try {
      const request: ForgotRequest = {
        identifier: formikBag.values.identifier,
      };

      if (!formikBag.dirty) callForgotApi(request);
    } catch (error) {}
  }, [callForgotApi]);

  const formikBag = useFormik({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: VALIDATION_SCHEMA,
  });

  const headerProps: LoginForgotHeaderProps = {
    iconName: "arrow-back",
    borderBottom: false,
    text: {
      right: "Help",
    },
    press: {
      left: () => goBack(),
      right: () => navigate(routes.AUTH_HELP),
    },
  };

  return (
    <AuthForgotTemplate
      forgotDesc={"Forgot Password ?"}
      resetDesc={"You can reset your password here."}
      formikBag={formikBag}
      header={headerProps}
      submitButtonTitle={"Submit"}
      identifierName={"identifier"}
      identifierPlaceholder={"Email / Phone"}
    />
  );
};

export default LoginForgot;
