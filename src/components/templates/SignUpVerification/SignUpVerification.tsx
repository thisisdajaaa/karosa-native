import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import FormPassword from "@app/components/molecules/FormPassword";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import { BaseText } from "@app/components/base-text";

import type { PropsType } from "./types";
import SignUpVerificationStyles from "./styles";

const SignUpVerificationTemplate: React.FC<PropsType> = (props: PropsType) => {
  const { nextButtonProps, verificationNumberProps } = props;
  const { values }: any = useRoute().params;

  return (
    <View>
      <Text
        text={"Enter verification code:"}
        textStyle={SignUpVerificationStyles.txtVerificationCode}
      />
      <Text
        text={"You verification code is sent by SMS to: " + values.identifier}
        textStyle={SignUpVerificationStyles.txtSMS}
      />
      <FormPassword {...verificationNumberProps} />
      <FormButton {...nextButtonProps} />
      <View style={{ alignItems: "center" }}>
        <View>
          <Text
            text={"Did not receive the code?"}
            textStyle={SignUpVerificationStyles.txtSMS}
          />
          <View style={{ marginTop: 8 }}>
            <TouchableOpacity onPress={() => console.log("Resend")}>
              <BaseText style={SignUpVerificationStyles.txtResend}>
                Resend
              </BaseText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpVerificationTemplate;
