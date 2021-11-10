/**
 *
 * AuthPhoneNumber
 * @format
 *
 */

import React, { FC } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { useFormikContext } from "formik";
import { theme } from "@app/styles";
import { getPlatform } from "@app/utils";
import { useFieldError } from "@app/hooks";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormInput from "@app/molecules/FormInput";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import type { AuthPhoneNumber } from "@app/screens/AuthPhoneNumber/types";
import { PHONE_NUMBER_LENGTH } from "./config";
import AuthPhoneNumberStyles from "./styles";

const AuthPhoneNumberTemplate: FC<PropsType> = (props) => {
  const { onBack, onHelp } = props;

  const { isError } = useFieldError("identifier");

  const { touched, errors } = useFormikContext<AuthPhoneNumber>();

  const isIOS = getPlatform.getInstance() === "ios";

  const hasFieldError = () => {
    return touched.identifier && errors.identifier
      ? AuthPhoneNumberStyles.errorContainer
      : AuthPhoneNumberStyles.inputContainer;
  };

  return (
    <>
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Sign up",
          style: AuthPhoneNumberStyles.txtHeader,
        }}
        rightComponent={{
          text: "Help",
          style: AuthPhoneNumberStyles.txtHelp,
          onPress: onHelp,
        }}
      />
      <KeyboardAvoidingView
        style={AuthPhoneNumberStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Text
          text={"Enter your phone number"}
          textStyle={AuthPhoneNumberStyles.txtEnterPhoneNumber}
        />
        <Text
          text={"Must be an active phone number"}
          textStyle={AuthPhoneNumberStyles.txtResetPass}
        />
        <FormInput
          name="identifier"
          placeholder="Phone number"
          keyboardType="number-pad"
          maxLength={PHONE_NUMBER_LENGTH}
          inputContainerStyle={hasFieldError()}
        />

        {isError && (
          <View style={AuthPhoneNumberStyles.validationContainer}>
            <ValidationMessage name="identifier" />
          </View>
        )}

        <FormButton title="Next" />
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthPhoneNumberTemplate;
