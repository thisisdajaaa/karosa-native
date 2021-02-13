/**
 *
 * Login
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View, TouchableOpacity } from "react-native";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import Header from "@app/components/molecules/Header";
import FormInput from "@app/molecules/FormInput";
import SubmitButton from "@app/molecules/FormButton";

import type { PropsType } from "./types";
import AuthLoginStyles from "./styles";

const AuthLoginTemplate: FC<PropsType> = (props: PropsType) => {
  const { loginButtonProps, onPress, onBack } = props;

  return (
    <Fragment>
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={
          <Text text="Login" customStyle={AuthLoginStyles.txtHeader} />
        }
      />
      <View style={AuthLoginStyles.container}>
        <View style={AuthLoginStyles.logoContainer}>
          <Image
            customStyle={AuthLoginStyles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <FormInput
          name="identifier"
          placeholder="Phone number / Username / Email"
          autoCapitalize={"none"}
          keyboardType="default"
        />
        <FormInput
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          keyboardType="default"
        />

        <SubmitButton {...loginButtonProps} />

        <TouchableOpacity onPress={onPress}>
          <Text
            text="I forgot my password"
            customStyle={AuthLoginStyles.txtForgotPass}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default AuthLoginTemplate;
