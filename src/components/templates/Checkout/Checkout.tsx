/**
 *
 * Checkout
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import { theme } from "@app/styles";
import { CheckoutContext } from "@app/redux/shop/models";
import { getPlatform } from "@app/utils";
import Icon from "@app/atoms/Icon";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import CheckoutStyles from "./styles";
import Address from "./Address";

const CheckoutTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values } = useFormikContext<CheckoutContext>();

  const isIOS = getPlatform.getInstance() === "ios";

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Checkout(3)",
          style: CheckoutStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={CheckoutStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <Address />
      </KeyboardAvoidingView>
    </>
  );
};

export default CheckoutTemplate;