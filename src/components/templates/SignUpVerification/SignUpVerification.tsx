import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import FormPassword from "@app/molecules/FormPassword";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import SignUpVerificationStyles from "./styles";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import { formatPhoneNumber, getPlatform } from "@app/utils";

const SignUpVerificationTemplate: React.FC<PropsType> = (props: PropsType) => {
  const { onHelp, onBack } = props;
  const { values }: any = useRoute().params;

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
          style: SignUpVerificationStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: SignUpVerificationStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={SignUpVerificationStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Enter verification code"}
          textStyle={SignUpVerificationStyles.txtVerificationCode}
        />
        <Text
          text={"Your verification code is sent by SMS to "}
          textStyle={SignUpVerificationStyles.txtSMS}
        />
        <Text
          text={formatPhoneNumber(values.identifier)}
          textStyle={SignUpVerificationStyles.txtSMSNumber}
        />

        <FormPassword name="otp" inputLength={6} />

        <View style={SignUpVerificationStyles.btnContainer}>
          <FormButton title="Next" />
        </View>

        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Text
            text={"Did not receive the code?"}
            textStyle={SignUpVerificationStyles.txtDidNotReceiveCode}
          />
          <Text
            text={" Resend"}
            textStyle={SignUpVerificationStyles.txtResend}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpVerificationTemplate;
