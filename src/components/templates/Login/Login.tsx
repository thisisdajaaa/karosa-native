/**
 *
 * Login
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { FormikContext } from "formik";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import LoginStyles from "./styles";

const Login: FC<PropsType> = (props: PropsType) => {
  const {
    formikBag,
    identifierProps,
    passwordProps,
    loginButtonProps,
    onPress,
    description,
    isLoading,
    customStyles,
    header,
  } = props;

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen isLoading={isLoading} customStyles={customStyles} header={header}>
        <View style={LoginStyles.logoContainer}>
          <Image
            style={LoginStyles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <FormInput {...identifierProps} />
        <FormInput {...passwordProps} />
        <SubmitButton {...loginButtonProps} />

        <TouchableOpacity onPress={onPress}>
          <BaseText customStyles={LoginStyles.txtForgotPass}>
            {description}
          </BaseText>
        </TouchableOpacity>
      </Screen>
    </FormikContext.Provider>
  );
};

Login.defaultProps = {
  description: "I forgot my password",
  loginButtonProps: {
    title: "Login",
    margin: 6,
  },
  passwordProps: {
    name: "password",
    placeholder: "Password",
    textContentType: "password",
    secureTextEntry: true,
  },
  identifierProps: {
    name: "identifier",
    placeholder: "Phone number / Username / Email",
    textContentType: "username" || "telephoneNumber",
  },
  customStyles: LoginStyles.container,
};

export default Login;
