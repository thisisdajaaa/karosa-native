/**
 *
 * SignUpPassword
 * @format
 *
 */

import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useRoute } from "@react-navigation/native";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import { actions } from "@app/redux/auth";
import { RegisterRequest } from "@app/redux/auth/models";

import type { PropsType } from "./types";
import SignUpPasswordStyles from "./styles";
import { View } from "react-native";

const SignUpPasswordScreen: React.FC<PropsType> = (props: PropsType) => {
  const { submitButtonProps, passwordProps } = props;

  const dispatch = useDispatch();

  const { values }: any = useRoute().params;
  useEffect(() => {}, []);

  const callRegisterApi = useCallback(
    (request: RegisterRequest) =>
      dispatch(actions.callRegisterApi.request(request)),
    [dispatch]
  );

  const formikBag = useFormik({
    initialValues: { password: "", phoneDigits: values },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {
      const request: RegisterRequest = {
        identifier: formikBag.values.phoneDigits,
        password: formikBag.values.password,
      };
      callRegisterApi(request);
    },
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <View>
        <Text
          text={"Set your Password"}
          textStyle={SignUpPasswordStyles.txtSetPass}
        />
        <Text
          text={
            "Password must be 8-16 characters long, and contain one uppercase and \
        one lowercase character "
          }
          textStyle={SignUpPasswordStyles.txtResetPass}
        />
        <FormInput {...passwordProps} />
        <FormButton {...submitButtonProps} />
      </View>
    </FormikContext.Provider>
  );
};

export default SignUpPasswordScreen;
