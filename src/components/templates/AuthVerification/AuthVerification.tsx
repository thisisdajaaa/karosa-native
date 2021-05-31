/**
 *
 * AuthVerification
 * @format
 *
 */

import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { formatPhoneNumber, getPlatform } from "@app/utils";
import { theme } from "@app/styles";
import type { AuthRegistrationParams } from "@app/screens/AuthPhoneNumber/types";
import FormOTP from "@app/molecules/FormOTP";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import { OTP_LENGTH } from "./config";
import AuthVerificationStyles from "./styles";

const AuthVerificationTemplate: React.FC<PropsType> = (props) => {
  const { onHelp, onBack } = props;
  const { params } =
    useRoute<RouteProp<AuthRegistrationParams, "AuthPhoneNumber">>();

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
          style: AuthVerificationStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: AuthVerificationStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={AuthVerificationStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Enter verification code"}
          textStyle={AuthVerificationStyles.txtVerificationCode}
        />
        <Text
          text={"Your verification code is sent by SMS to "}
          textStyle={AuthVerificationStyles.txtSMS}
        />
        <Text
          text={formatPhoneNumber(params.identifier)}
          textStyle={AuthVerificationStyles.txtSMSNumber}
        />

        <FormOTP name="otp" inputLength={OTP_LENGTH} />

        <View style={AuthVerificationStyles.btnContainer}>
          <FormButton title="Next" />
        </View>

        <View style={AuthVerificationStyles.txtBottom}>
          <Text
            text={"Did not receive the code?"}
            textStyle={AuthVerificationStyles.txtDidNotReceiveCode}
          />
          <Text text={" Resend"} textStyle={AuthVerificationStyles.txtResend} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthVerificationTemplate;
