/**
 *
 * SignUpSetPassword
 * @format
 *
 */

import React, { FC, useCallback, useEffect } from "react";
import SignUpPasswordTemplate from "@app/templates/SignUpPassword";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useRoute } from "@react-navigation/native";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";
import { PropsType as FormInputProps } from "@app/molecules/FormInput/types";
import { actions } from "@app/redux/auth";
import { RegisterRequest } from "@app/redux/auth/models";

import type { PropsType } from "./types";
import validationSchema from "./validation";

const SignUpSetPassword: FC<PropsType> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const { values }: any = useRoute().params;
  useEffect(() => {
    console.log(values.identifier);
  }, []);

  // const callRegisterApi = useCallback(
  //   (request: RegisterRequest) =>
  //     dispatch(actions.callRegisterApi.request(request)),
  //   [dispatch]
  // );

  const formikBag = useFormik({
    initialValues: { password: "", phoneDigits: values },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      // const request: RegisterRequest = {
      //   identifier: formikBag.values.phoneDigits,
      //   password: formikBag.values.password,
      // };
      // callRegisterApi(request);
      console.log(values);
    },
    validationSchema,
  });
  const passwordProps: FormInputProps = {
    name: "password",
    placeholder: "Password",
    secureTextEntry: true,
  };

  const submitButtonProps: SubmitButtonProps = {
    title: "Next",
  };
  return (
    <FormikContext.Provider value={formikBag}>
      <SignUpPasswordTemplate
        passwordProps={passwordProps}
        submitButtonProps={submitButtonProps}
      />
    </FormikContext.Provider>
  );
};

export default SignUpSetPassword;
