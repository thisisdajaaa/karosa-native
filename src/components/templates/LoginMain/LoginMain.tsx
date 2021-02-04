/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { AppButton } from "@app/components/button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import LoginMainStyles from "./styles";

const LoginMain: FC<PropsType> = (props: PropsType) => {
  const {
    onLogin,
    onFBLogin,
    onGoogleLogin,
    header,
    customStyles,
    fbButtonProps,
    gmailButtonProps,
    signInButtonProps,
  } = props;

  return (
    <Screen customStyles={customStyles} header={header}>
      <View style={LoginMainStyles.logoContainer}>
        <Image
          style={LoginMainStyles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <AppButton onPress={onFBLogin} {...fbButtonProps} />
      <AppButton onPress={onGoogleLogin} {...gmailButtonProps} />
      <View style={LoginMainStyles.hrContainer}>
        <View style={LoginMainStyles.hrLine} />
        <View>
          <BaseText customStyles={LoginMainStyles.txtOr}>or</BaseText>
        </View>
        <View style={LoginMainStyles.hrLine} />
      </View>
      <AppButton onPress={onLogin} {...signInButtonProps} />
      <BaseText customStyles={LoginMainStyles.noAccContainer}>
        Don't have an account?
        <BaseText customStyles={LoginMainStyles.txtSignUp}> Sign up</BaseText>
      </BaseText>
    </Screen>
  );
};

LoginMain.defaultProps = {
  customStyles: LoginMainStyles.container,
  fbButtonProps: {
    title: "Continue with Facebook",
    icon: {
      left: (
        <FontAwesome
          name="facebook-official"
          style={LoginMainStyles.buttonIcon}
        />
      ),
    },
    containerStyle: LoginMainStyles.fbButtonContainer,
  },
  gmailButtonProps: {
    title: "Continue with Google",
    icon: {
      left: <AntDesign name="google" style={LoginMainStyles.buttonIcon} />,
    },
    containerStyle: LoginMainStyles.gmailButtonContainer,
  },
  signInButtonProps: {
    title: "Phone number / Username / Email",
    containerStyle: LoginMainStyles.signInButtonContainer,
  },
};

export default LoginMain;
