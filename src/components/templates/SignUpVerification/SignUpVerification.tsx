import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FormPassword from "@app/components/molecules/FormPassword";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import type { PropsType } from "./types";
import SignUpVerificationStyles from "./styles";

const VerificationScreen: React.FC<PropsType> = (props: PropsType) => {
  const { nextButtonProps, verificationNumberProps } = props;
  const { goBack, navigate } = useNavigation();
  const { values }: any = useRoute().params;

  useEffect(() => {
    console.log(values.identifier);
  }, []);

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Sign up",
      text: {
        right: "Help",
      },
      press: {
        left: () => goBack(),
        right: () => navigate(routes.AUTH_HELP),
      },
    },
    customStyles: SignUpVerificationStyles.container,
  };

  return (
    <Screen {...screenProps}>
      <BaseText customStyles={SignUpVerificationStyles.txtVerificationCode}>
        Enter verification code:
      </BaseText>
      <BaseText style={SignUpVerificationStyles.txtSMS}>
        You verification code is sent by SMS to: {values.identifier}
      </BaseText>
      <FormPassword {...verificationNumberProps} />
      <SubmitButton {...nextButtonProps} />
      <View style={{ alignItems: "center" }}>
        <BaseText style={SignUpVerificationStyles.txtSMS}>
          Did not receive the code?
          <View style={{ marginTop: 8 }}>
            <TouchableOpacity onPress={() => console.log("Resend")}>
              <BaseText style={SignUpVerificationStyles.txtResend}>
                Resend
              </BaseText>
            </TouchableOpacity>
          </View>
        </BaseText>
      </View>
    </Screen>
  );
};

export default VerificationScreen;
