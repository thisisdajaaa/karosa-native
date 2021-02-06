/**
 *
 * Login
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { FormikContext } from "formik";
import FormInput from "@app/molecules/FormInput";
import SubmitButton from "@app/molecules/FormButton";
import BaseText from "@app/atoms/Text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import LoginStyles from "./styles";

const Login: FC<PropsType> = (props: PropsType) => {
  const {
    formikBag,
    identifierName,
    identifierPlaceholder,
    passwordName,
    passwordPlaceholder,
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

        <FormInput name={identifierName} placeholder={identifierPlaceholder} />
        <FormInput name={passwordName} placeholder={passwordPlaceholder} />
        <SubmitButton {...loginButtonProps} />

        <TouchableOpacity onPress={onPress}>
          <BaseText text={description} customStyle={LoginStyles.txtForgotPass}>
            {description}
          </BaseText>
        </TouchableOpacity>
      </Screen>
    </FormikContext.Provider>
  );
};

Login.defaultProps = {
  customStyles: LoginStyles.container,
};

export default Login;
