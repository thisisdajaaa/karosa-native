/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";
import Image from "@app/atoms/Image";

import type { PropsType } from "./types";
import AuthMainStyles from "./styles";

const AuthMainTemplate: FC<PropsType> = (props) => {
  const {
    isGoogleButtonLoading,
    onLogin,
    onFBLogin,
    onGoogleLogin,
    onHelp,
    onSignUp,
  } = props;

  const getHeader = () => {
    return (
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
    );
  };

  const getLogo = () => {
    return (
      <>
        <View style={AuthMainStyles.logoContainer}>
          <Image
            imageStyle={AuthMainStyles.logo}
            source={require("../../../assets/images/karosa.png")}
            resizeMode="contain"
          />
        </View>
        <View style={AuthMainStyles.spacer} />
      </>
    );
  };

  const getMainButtons = () => {
    return (
      <>
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
          loading={isGoogleButtonLoading}
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
      </>
    );
  };

  const getBottomText = () => {
    return (
      <View style={AuthMainStyles.txtSignUpContainer}>
        <Text
          textStyle={AuthMainStyles.noAccContainer}
          text="Don't have an account?"
        />
        <TouchableOpacity onPress={onSignUp}>
          <Text textStyle={AuthMainStyles.txtSignUp} text="Sign up" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <View style={AuthMainStyles.container}>
        <>{getLogo()}</>
        <>{getMainButtons()}</>
        <>{getBottomText()}</>
      </View>
    </>
  );
};

export default AuthMainTemplate;
