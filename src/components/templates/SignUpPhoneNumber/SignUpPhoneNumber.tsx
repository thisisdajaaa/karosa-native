/**
 *
 * SignUpPhoneNumber
 * @format
 *
 */

import React from "react";
import type { PropsType } from "./types";
import SignUpPhoneNumberStyles from "./styles";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import { KeyboardAvoidingView } from "react-native";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { getPlatform } from "@app/utils";

const SignUpPhonenumberTemplate: React.FC<PropsType> = (props: PropsType) => {
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
          style: SignUpPhoneNumberStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: SignUpPhoneNumberStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={SignUpPhoneNumberStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Enter your phone number"}
          textStyle={SignUpPhoneNumberStyles.txtEnterPhoneNumber}
        />
        <Text
          text={"Must be an active phone number"}
          textStyle={SignUpPhoneNumberStyles.txtResetPass}
        />
        <FormInput
          name="identifier"
          placeholder="Phone"
          keyboardType="number-pad"
        />
        <FormButton title="next" />
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpPhonenumberTemplate;
