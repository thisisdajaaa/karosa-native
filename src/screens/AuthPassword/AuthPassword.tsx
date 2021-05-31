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
import { actions, selectors } from "@app/redux/auth";
import { RegisterByPhoneRequest } from "@app/redux/auth/models";
import { generateRandomUsername } from "@app/utils";
import { useAuth, useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { AuthRegistrationParams } from "@app/screens/AuthPhoneNumber/types";
import type { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";
import routes from "@app/navigators/routes";
import AuthPasswordTemplate from "@app/templates/AuthPassword";

import validationSchema from "./validation";

const AuthPasswordScreen: FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  const { isLoggedIn } = useAuth();

  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthVerification">>();

  const registerByPhoneResponse = useMemoizedSelector(
    selectors.getRegisterByPhoneResponse
  );

  const callRegisterByPhoneNumberApi = useCallback(
    (request: RegisterByPhoneRequest) =>
      dispatch(actions.callRegisterByPhoneNumberApi.request(request)),
    [dispatch]
  );

  useUpdateEffect(() => {
    if (isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn]);

  const handleSubmit = () => {
    const request: RegisterByPhoneRequest = {
      username: generateRandomUsername(6),
      phoneNumber: formikBag.values.identifier,
      password: formikBag.values.password,
    };

    callRegisterByPhoneNumberApi(request);
  };

  const formikBag = useFormik({
    initialValues: { password: "", identifier: params.identifier },
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleHelp = useCallback(() => {
    navigate(routes.AUTH_HELP);
  }, [navigate]);

  const registerByPhoneButtonProps: FormButtonProps = {
    title: "Next",
    loading: registerByPhoneResponse.isLoading,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <AuthPasswordTemplate
        registerByPhoneButtonProps={registerByPhoneButtonProps}
        onHelp={handleHelp}
        onBack={handleBack}
      />
    </FormikContext.Provider>
  );
};

export default AuthPasswordScreen;
