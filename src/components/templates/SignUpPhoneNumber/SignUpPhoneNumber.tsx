/**
 *
 * SignUpPhoneNumber
 * @format
 *
 */

import React from "react";
import type { PropsType } from "./types";
import SignUpPhoneNumberStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

const PhoneNumberScreen: React.FC<PropsType> = (props: PropsType) => {
  const { nextButtonProps, phoneNumberProps } = props;
  const { goBack, navigate } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Sign up",
      borderBottom: false,
      text: {
        right: "Help",
      },
      press: {
        left: () => goBack(),
        right: () => navigate(routes.AUTH_HELP),
      },
    },
    customStyles: SignUpPhoneNumberStyles.container,
  };

  return (
    <Screen {...screenProps}>
      <BaseText customStyles={SignUpPhoneNumberStyles.txtEnterPhoneNumber}>
        Enter your phone number
      </BaseText>
      <BaseText customStyles={SignUpPhoneNumberStyles.txtResetPass}>
        Must be an active phone number
      </BaseText>
      <FormInput {...phoneNumberProps} />
      <SubmitButton {...nextButtonProps} />
    </Screen>
  );
};

export default PhoneNumberScreen;
