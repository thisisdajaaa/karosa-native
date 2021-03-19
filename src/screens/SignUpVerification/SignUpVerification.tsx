/**
 *
 * SignUpVerification
 * @format
 *
 */
 
import React, {FC, useEffect} from 'react';

import VerificationScreen from "@app/templates/SignUpPhoneNumber";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";



import SignUpVerificationConfig from './config';
import type {PropsType} from './types';
import SignUpVerificationStyles from './styles';
import routes from "@app/navigators/routes";



const SignUpVerification: FC = () => {
  const { goBack, navigate } = useNavigation();
  const { values }: any = useRoute().params;

  useEffect(() => {
    console.log(values.identifier);
  }, []);

  const formikBag = useFormik({
    initialValues: { otp: "", phoneDigits: values.identifier },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      navigate("Stack", { screen: routes.AUTH_PASSWORD, params: { values } });
      console.log(values.otp);
    },
    validationSchema,
  });

  const submitButtonProps: SubmitButtonProps = {
    title: "Next",
    margin: 6,
  };

  const otpProps: FormPasswordProps = {
    name: "otp",
    inputLength: 6,
    style: styles.container,
  };

  return(


  );
};

export default SignUpVerification;