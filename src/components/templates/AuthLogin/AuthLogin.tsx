/**
 *
 * Login
 * @format
 *
 */

import React, { FC, Fragment, useRef } from "react";
import { useFormikContext } from "formik";
import {
  View,
  TouchableOpacity,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardEvent,
} from "react-native";
import { theme } from "@app/styles";
import { LoginRequest } from "@app/redux/auth/models";
import { useMount } from "@app/hooks";
import { getPlatform } from "@app/utils";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "./config";
import AuthLoginStyles from "./styles";

const AuthLoginTemplate: FC<PropsType> = (props: PropsType) => {
  const { loginButtonProps, onForgot, onBack } = props;
  const { errors, touched } = useFormikContext<LoginRequest>();

  const isIOS = getPlatform.getInstance() === "ios";

  const imageHeight = useRef(new Animated.Value(IMAGE_HEIGHT.REGULAR));
  const imageWidth = useRef(new Animated.Value(IMAGE_WIDTH.REGULAR));

  const hasFieldError = (key: keyof LoginRequest) => {
    return touched[key] && errors[key] ? AuthLoginStyles.errorContainer : {};
  };

  useMount(() => {
    const displayEvent = isIOS ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = isIOS ? "keyboardWillHide" : "keyboardDidHide";

    const displayKeyboard = Keyboard.addListener(
      displayEvent,
      animateKeyboardDisplay
    );

    const hideKeyboard = Keyboard.addListener(hideEvent, animateKeyboardHide);

    return () => {
      displayKeyboard.remove();
      hideKeyboard.remove();
    };
  });

  const animateKeyboardDisplay = (event: KeyboardEvent) => {
    Animated.timing(imageHeight.current, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT.SMALL,
      useNativeDriver: false,
    }).start();

    Animated.timing(imageWidth.current, {
      duration: event.duration,
      toValue: IMAGE_WIDTH.SMALL,
      useNativeDriver: false,
    }).start();
  };

  const animateKeyboardHide = (event: KeyboardEvent) => {
    Animated.timing(imageHeight.current, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT.REGULAR,
      useNativeDriver: false,
    }).start();

    Animated.timing(imageWidth.current, {
      duration: event.duration,
      toValue: IMAGE_WIDTH.REGULAR,
      useNativeDriver: false,
    }).start();
  };

  const getHeader = () => {
    return (
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Login",
          style: AuthLoginStyles.txtHeader,
        }}
      />
    );
  };

  const getAnimatedLogo = () => {
    return (
      <Fragment>
        <View style={AuthLoginStyles.logoContainer}>
          <Animated.Image
            style={{
              height: imageHeight.current,
              width: imageWidth.current,
            }}
            source={require("../../../../assets/logo-red.png")}
            resizeMode="contain"
          />
        </View>
        <View style={AuthLoginStyles.spacer} />
      </Fragment>
    );
  };

  const getLoginForm = () => {
    return (
      <Fragment>
        <FormInput
          name="identifier"
          placeholder="Phone number / Username / Email"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          inputContainerStyle={hasFieldError("identifier")}
        />

        <View style={AuthLoginStyles.validationContainer}>
          <ValidationMessage name="identifier" />
        </View>

        <FormInput
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCompleteType="off"
          secureTextEntry={true}
          autoCorrect={false}
          inputContainerStyle={hasFieldError("password")}
        />

        <View style={AuthLoginStyles.validationContainer}>
          <ValidationMessage name="password" />
        </View>

        <FormButton {...loginButtonProps} />
        <TouchableOpacity onPress={onForgot}>
          <Text
            text="I forgot my password"
            textStyle={AuthLoginStyles.txtForgotPass}
          />
        </TouchableOpacity>
      </Fragment>
    );
  };

  const getContent = () => {
    return (
      <KeyboardAvoidingView
        style={AuthLoginStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Fragment>{getAnimatedLogo()}</Fragment>
        <Fragment>{getLoginForm()}</Fragment>
      </KeyboardAvoidingView>
    );
  };

  return (
    <Fragment>
      <Fragment>{getHeader()}</Fragment>
      <Fragment>{getContent()}</Fragment>
    </Fragment>
  );
};

export default AuthLoginTemplate;
