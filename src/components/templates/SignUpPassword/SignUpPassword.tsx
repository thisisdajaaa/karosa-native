/**
 *
 * SignUpPassword
 * @format
 *
 */

import React from "react";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import SignUpPasswordStyles from "./styles";
import { View } from "react-native";

const SignUpPasswordScreen: React.FC<PropsType> = (props: PropsType) => {
  const { submitButtonProps, passwordProps } = props;

  return (
    <View>
      <Text
        text={"Set your Password"}
        textStyle={SignUpPasswordStyles.txtSetPass}
      />
      <Text
        text={
          "Password must be 8-16 characters long, and contain one uppercase and \
         one lowercase character "
        }
        textStyle={SignUpPasswordStyles.txtResetPass}
      />
      <FormInput {...passwordProps} />
      <FormButton {...submitButtonProps} />
    </View>
  );
};

export default SignUpPasswordScreen;
