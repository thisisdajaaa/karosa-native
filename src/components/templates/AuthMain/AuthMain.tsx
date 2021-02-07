/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import AppButton from "@app/atoms/Button";
import BaseText from "@app/atoms/Text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import LoginMainStyles from "./styles";
import { theme } from "@app/styles";

const AuthMain: FC<PropsType> = (props: PropsType) => {
  const {
    onLogin,
    onFBLogin,
    onGoogleLogin,
    header,
    customStyles,
    signInButtonProps,
    separatorLabel,
    subDescription,
    signupDesc,
  } = props;

  return (
    <Screen customStyles={customStyles} header={header}>
      <View style={LoginMainStyles.logoContainer}>
        <Image
          style={LoginMainStyles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <View style={LoginMainStyles.fbButtonWrapper}>
        <AppButton
          onPress={onFBLogin}
          customStyle={LoginMainStyles.fbButtonContainer}
          title={"Continue with Facebook"}
          icon={
            <FontAwesome
              name="facebook-official"
              style={LoginMainStyles.buttonIcon}
            />
          }
        />
      </View>
      <AppButton
        onPress={onGoogleLogin}
        customStyle={LoginMainStyles.gmailButtonContainer}
        title={"Continue with Google"}
        icon={<AntDesign name="google" style={LoginMainStyles.buttonIcon} />}
      />
      <View style={LoginMainStyles.hrContainer}>
        <View style={LoginMainStyles.hrLine} />
        <View>
          <BaseText
            customStyle={LoginMainStyles.txtOr}
            text={separatorLabel!}
          />
        </View>
        <View style={LoginMainStyles.hrLine} />
      </View>
      <AppButton onPress={onLogin} {...signInButtonProps} />
      <View style={LoginMainStyles.txtSignUpContainer}>
        <BaseText
          customStyle={LoginMainStyles.noAccContainer}
          text={subDescription !== undefined ? subDescription : ""}
        />
        <BaseText
          customStyle={LoginMainStyles.txtSignUp}
          text={signupDesc !== undefined ? signupDesc : ""}
        />
      </View>
    </Screen>
  );
};

AuthMain.defaultProps = {
  customStyles: LoginMainStyles.container,
  separatorLabel: "or",
  subDescription: " Don't have an account?",
  signupDesc: "Sign up",
};

export default AuthMain;
