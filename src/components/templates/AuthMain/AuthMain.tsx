/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import AppButton from "@app/atoms/Button";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import AuthMainStyles from "./styles";
import Header from "@app/components/molecules/Header";
import Image from "@app/atoms/Image";

const AuthMain: FC<PropsType> = (props: PropsType) => {
  const { onLogin, onFBLogin, onGoogleLogin, onHelp } = props;

  return (
    <Fragment>
      <Header
        leftComponent={{
          text: "Login",
          style: AuthMainStyles.txtTitle,
        }}
        rightComponent={{
          text: "Help",
          style: AuthMainStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <View style={AuthMainStyles.container}>
        <View style={AuthMainStyles.logoContainer}>
          <Image
            customStyle={AuthMainStyles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <View style={AuthMainStyles.spacer} />
        <AppButton
          onPress={onFBLogin}
          customStyle={AuthMainStyles.fbButtonContainer}
          title={"Continue with Facebook"}
          icon={
            // to replace icon with svg
            <FontAwesome
              name="facebook-official"
              style={AuthMainStyles.buttonIcon}
            />
          }
        />
        <View style={AuthMainStyles.fbButtonWrapper} />
        <AppButton
          onPress={onGoogleLogin}
          customStyle={AuthMainStyles.gmailButtonContainer}
          title={"Continue with Google"}
          icon={
            // to replace icon with svg
            <AntDesign name="google" style={AuthMainStyles.buttonIcon} />
          }
        />
        <View style={AuthMainStyles.hrContainer}>
          <View style={AuthMainStyles.hrLine} />
          <View>
            <Text customStyle={AuthMainStyles.txtOr} text="or" />
          </View>
          <View style={AuthMainStyles.hrLine} />
        </View>

        <AppButton onPress={onLogin} title="Phone number / Username / Email" />
        <View style={AuthMainStyles.txtSignUpContainer}>
          <Text
            customStyle={AuthMainStyles.noAccContainer}
            text="Don't have an account?"
          />
          <Text customStyle={AuthMainStyles.txtSignUp} text="Sign up" />
        </View>
      </View>
    </Fragment>
  );
};

export default AuthMain;
