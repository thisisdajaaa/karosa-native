/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Button from "@app/components/atoms/Button";
import Text from "@app/components/atoms/Text";
import Header from "@app/components/molecules/Header";
import Image from "@app/components/atoms/Image";

import type { PropsType } from "./types";
import AuthMainStyles from "./styles";

const AuthMain: FC<PropsType> = (props: PropsType) => {
  const { onLogin, onFBLogin, onGoogleLogin, onHelp, onSignUp } = props;

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
            imageStyle={AuthMainStyles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <View style={AuthMainStyles.spacer} />
        <Button
          onPress={onFBLogin}
          buttonStyle={AuthMainStyles.fbButtonContainer}
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
        <Button
          onPress={onGoogleLogin}
          buttonStyle={AuthMainStyles.gmailButtonContainer}
          title={"Continue with Google"}
          icon={
            // to replace icon with svg
            <AntDesign name="google" style={AuthMainStyles.buttonIcon} />
          }
        />
        <View style={AuthMainStyles.hrContainer}>
          <View style={AuthMainStyles.hrLine} />
          <View>
            <Text textStyle={AuthMainStyles.txtOr} text="or" />
          </View>
          <View style={AuthMainStyles.hrLine} />
        </View>

        <Button onPress={onLogin} title="Phone number / Username / Email" />
        <TouchableOpacity onPress={onSignUp}>
          <View style={AuthMainStyles.txtSignUpContainer}>
            <Text
              textStyle={AuthMainStyles.noAccContainer}
              text="Don't have an account?"
            />
            <Text textStyle={AuthMainStyles.txtSignUp} text="Sign up" />
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default AuthMain;
