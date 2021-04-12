/**
 *
 * SignUpVerification
 * @format
 *
 */

import React, { FC, useEffect } from "react";

import SignUpVerificationTemplate from "@app/templates/SignUpVerification";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";
import { PropsType as FormPasswordProps } from "@app/components/molecules/FormPassword/types";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const SignUpVerification: FC = () => {
  const { navigate } = useNavigation();
  const { values }: any = useRoute().params;

  useEffect(() => {
    console.log(values.identifier);
  }, []);

  const formikBag = useFormik({
    initialValues: { otp: "", phoneDigits: values.identifier },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      navigate("Stack", {
        screen: routes.AUTH_SET_PASSWORD,
        params: { values },
      });
      console.log(values.otp);
    },
    validationSchema,
  });

  const submitButtonProps: SubmitButtonProps = {
    title: "Next",
  };

  const otp: FormPasswordProps = {
    name: "otp",
    inputLength: 6,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <SignUpVerificationTemplate
        verificationNumberProps={otp}
        nextButtonProps={submitButtonProps}
      />
    </FormikContext.Provider>
  );
};

export default SignUpVerification;
