/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { FormikProvider, useFormik } from "formik";
import { ForgotRequest } from "@app/redux/auth/models";
import { actions } from "@app/redux/auth";
import { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";
import AuthForgotTemplate from "@app/templates/AuthForgot";
import routes from "@app/navigators/routes";

import ForgotValidationSchema from "./validation";

const LoginForgot: FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const callForgotApi = useCallback(
    (request: ForgotRequest) =>
      dispatch(actions.callForgotApi.request(request)),
    [dispatch]
  );

  const handleSubmit = () => {
    const request: ForgotRequest = {
      identifier: formikBag.values.identifier,
    };

    callForgotApi(request);
  };

  const formInitValues = { identifier: "" };

  const formikBag = useFormik<ForgotRequest>({
    initialValues: formInitValues,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: ForgotValidationSchema,
  });

  const forgotButtonProps: FormButtonProps = {
    title: "Submit",
  };

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleHelp = useCallback(() => {
    navigate(routes.AUTH_HELP);
  }, [navigate]);

  return (
    <FormikProvider value={formikBag}>
      <AuthForgotTemplate
        forgotButtonProps={forgotButtonProps}
        onBack={handleBack}
        onHelp={handleHelp}
      />
    </FormikProvider>
  );
};

export default LoginForgot;
