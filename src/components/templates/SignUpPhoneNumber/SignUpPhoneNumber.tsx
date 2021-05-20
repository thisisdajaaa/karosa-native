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
import { View } from "react-native";

const PhoneNumberScreen: React.FC<PropsType> = (props: PropsType) => {
  const { nextButtonProps, phoneNumberProps } = props;

  return (
    <View>
      <Text
        text={"Enter your phone number"}
        textStyle={SignUpPhoneNumberStyles.txtEnterPhoneNumber}
      />
      <Text
        text={"Must be an active phone number"}
        textStyle={SignUpPhoneNumberStyles.txtResetPass}
      />
      <FormInput {...phoneNumberProps} />
      <FormButton {...nextButtonProps} />
    </View>
  );
};

export default PhoneNumberScreen;
