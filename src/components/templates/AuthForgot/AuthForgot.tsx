/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC } from "react";
import { useFormikContext } from "formik";
import { KeyboardAvoidingView, View } from "react-native";
import { theme } from "@app/styles";
import { ForgotRequest } from "@app/redux/auth/models";
import { getPlatform } from "@app/utils";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import AuthForgotStyles from "./styles";

const AuthForgotTemplate: FC<PropsType> = (props) => {
  const { forgotButtonProps, onBack, onHelp } = props;
  const { errors, touched } = useFormikContext<ForgotRequest>();

  const isIOS = getPlatform.getInstance() === "ios";

  const hasFieldError = (key: keyof ForgotRequest) => {
    return touched[key] && errors[key] ? AuthForgotStyles.errorContainer : {};
  };

  const getHeader = () => {
    return (
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        rightComponent={{
          text: "Help",
          style: AuthForgotStyles.txtHelp,
          onPress: onHelp,
        }}
      />
    );
  };

  const getContent = () => {
    return (
      <KeyboardAvoidingView
        style={AuthForgotStyles.container}
        behavior={isIOS ? "padding" : undefined}
      >
        <Text
          text="Forgot Password?"
          textStyle={AuthForgotStyles.txtForgotPass}
        />
        <Text
          text="You can reset your password here."
          textStyle={AuthForgotStyles.txtResetPass}
        />

        <FormInput
          name="identifier"
          placeholder="Email / Phone"
          autoCompleteType="off"
          inputContainerStyle={hasFieldError("identifier")}
          autoCorrect={false}
        />

        <View style={AuthForgotStyles.validationContainer}>
          <ValidationMessage name="identifier" />
        </View>

        <FormButton {...forgotButtonProps} />
      </KeyboardAvoidingView>
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <>{getContent()}</>
    </>
  );
};

export default AuthForgotTemplate;
