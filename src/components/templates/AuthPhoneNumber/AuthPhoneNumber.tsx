/**
 *
 * AuthPhoneNumber
 * @format
 *
 */

import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { theme } from "@app/styles";
import { getPlatform } from "@app/utils";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import AuthPhoneNumberStyles from "./styles";

const AuthPhoneNumberTemplate: React.FC<PropsType> = (props) => {
  const { onBack, onHelp } = props;

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
          style: AuthPhoneNumberStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: AuthPhoneNumberStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={AuthPhoneNumberStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Enter your phone number"}
          textStyle={AuthPhoneNumberStyles.txtEnterPhoneNumber}
        />
        <Text
          text={"Must be an active phone number"}
          textStyle={AuthPhoneNumberStyles.txtResetPass}
        />
        <FormInput
          name="identifier"
          placeholder="Phone number"
          keyboardType="number-pad"
        />
        <FormButton title="Next" />
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthPhoneNumberTemplate;
