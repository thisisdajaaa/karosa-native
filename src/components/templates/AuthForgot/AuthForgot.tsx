/**
 *
 * LoginForgot
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import { theme } from "@app/styles";
import { ForgotRequest } from "@app/redux/auth/models";
import FormInput from "@app/molecules/FormInput";
import SubmitButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/components/molecules/Header";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

import type { PropsType } from "./types";
import AuthForgotStyles from "./styles";

const AuthForgot: FC<PropsType> = (props: PropsType) => {
  const { forgotButtonProps, onBack, onHelp } = props;
  const { errors, touched } = useFormikContext<ForgotRequest>();

  const hasFieldError = (key: keyof ForgotRequest) => {
    return touched[key] && errors[key] ? AuthForgotStyles.errorContainer : {};
  };

  return (
    <Fragment>
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
      <View style={AuthForgotStyles.container}>
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
          autoCapitalize="none"
          autoCompleteType="off"
          inputContainerStyle={hasFieldError("identifier")}
          autoCorrect={false}
        />

        <View style={AuthForgotStyles.validationContainer}>
          <ValidationMessage name="identifier" />
        </View>

        <SubmitButton {...forgotButtonProps} />
      </View>
    </Fragment>
  );
};

export default AuthForgot;
