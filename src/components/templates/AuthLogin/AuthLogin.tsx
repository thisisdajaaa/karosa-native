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
import Header from "@app/components/molecules/Header";
import FormInput from "@app/molecules/FormInput";
import SubmitButton from "@app/molecules/FormButton";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

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
    const keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      keyboardWillShow
    );

    const keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      keyboardWillHide
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  });

  const keyboardWillShow = (event: KeyboardEvent) => {
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

  const keyboardWillHide = (event: KeyboardEvent) => {
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
      <KeyboardAvoidingView
        style={AuthLoginStyles.container}
        behavior={isIOS ? "padding" : "position"}>
        <View style={AuthLoginStyles.logoContainer}>
          <Animated.Image
            style={{
              height: imageHeight.current,
              width: imageWidth.current,
            }}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>
        <View style={AuthLoginStyles.spacer} />
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

        <SubmitButton {...loginButtonProps} />
        <TouchableOpacity onPress={onForgot}>
          <Text
            text="I forgot my password"
            customStyle={AuthLoginStyles.txtForgotPass}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default AuthLoginTemplate;
