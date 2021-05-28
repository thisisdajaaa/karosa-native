/**
 *
 * SignUpPhoneNumber
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import SignUpPhoneNumberTemplate from "@app/templates/SignUpPhoneNumber";
import { FormikProvider, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";
import { useDispatch } from "react-redux";
import actions from "@app/redux/auth/actions";
import { useMount } from "@app/hooks";

const SignUpPhoneNumber: FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  const setAuthBack = useCallback(
    (value: boolean) => dispatch(actions.setAuthBack(value)),
    [dispatch]
  );

  useMount(() => setAuthBack(false));

  const formikBag = useFormik({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_OTP,
        params: { values },
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
      <SignUpPhoneNumberTemplate onBack={handleBack} onHelp={handleHelp} />
    </FormikProvider>
  );
};

export default SignUpPhoneNumber;
