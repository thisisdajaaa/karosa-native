/**
 *
 * AuthPassword
 * @format
 *
 */

import React, { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getPlatform } from "@app/utils";
import { theme } from "@app/styles";
import { useFieldError } from "@app/hooks";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import { PASSWORD_LENGTH } from "./config";
import AuthPasswordScreenStyles from "./styles";

const AuthPasswordTemplate: FC<PropsType> = (props) => {
  const { onBack, onHelp, registerByPhoneButtonProps } = props;

  const { isError } = useFieldError("password");

  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const isIOS = getPlatform.getInstance() === "ios";

  return (
    <>
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Sign up",
          style: AuthPasswordScreenStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: AuthPasswordScreenStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={AuthPasswordScreenStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Set your Password"}
          textStyle={AuthPasswordScreenStyles.txtSetPass}
        />
        <Text
          text={
            "Password must be 8-16 characters long, and contain one uppercase and one lowercase character "
          }
          textStyle={AuthPasswordScreenStyles.txtResetPass}
        />
        <View style={AuthPasswordScreenStyles.passwordContainer}>
          <FormInput
            name="password"
            placeholder="Password"
            maxLength={PASSWORD_LENGTH}
            secureTextEntry={securePassword}
          />

          <TouchableWithoutFeedback
            onPress={() => setSecurePassword((value) => !value)}>
            <View style={AuthPasswordScreenStyles.toggleContainer}>
              <Text
                text={securePassword ? "Show" : "Hide"}
                textStyle={AuthPasswordScreenStyles.txtToggle}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {isError && (
          <View style={AuthPasswordScreenStyles.validationContainer}>
            <ValidationMessage name="password" />
          </View>
        )}

        <FormButton {...registerByPhoneButtonProps} />
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthPasswordTemplate;
