/**
 *
 * AuthPhoneNumber
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FormikProvider, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useMount } from "@app/hooks";
import actions from "@app/redux/auth/actions";
import routes from "@app/navigators/routes";
import AuthPhoneNumberTemplate from "@app/templates/AuthPhoneNumber";

import type { AuthPhoneNumber } from "./types";
import validationSchema from "./validation";

const AuthPhoneNumberScreen: FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  const setAuthBack = useCallback(
    (value: boolean) => dispatch(actions.setAuthBack(value)),
    [dispatch]
  );

  useMount(() => setAuthBack(false));

  const formikBag = useFormik<AuthPhoneNumber>({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_SET_PASSWORD,
        params: { identifier: values.identifier },
      });
    },
    validationSchema,
  });

  const handleBack = useCallback(() => {
    setAuthBack(true);
    goBack();
  }, [goBack]);

  const handleHelp = useCallback(() => {
    navigate(routes.AUTH_HELP);
  }, [navigate]);

  return (
    <FormikProvider value={formikBag}>
      <AuthPhoneNumberTemplate onBack={handleBack} onHelp={handleHelp} />
    </FormikProvider>
  );
};

export default AuthPhoneNumberScreen;
