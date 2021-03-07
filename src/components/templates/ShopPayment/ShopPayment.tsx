/**
 *
 * ShopPayment
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { View } from "react-native";
import { theme } from "@app/styles";
import { listIterator } from "@app/utils";
import Header from "@app/components/molecules/Header";
import ListSwitch from "@app/organisms/ListSwitch";
import FormButton from "@app/molecules/FormButton";

import type { PropsType } from "./types";
import ShopPaymentStyles from "./styles";

const ShopPayment: FC<PropsType> = (props) => {
  const { onBack, paymentButtonProps } = props;

  const listSwitch = (title: string, name: string) => {
    return <ListSwitch boldTitle={title} name={name} hasBottomDivider />;
  };

  const getPaymentForm = () => {
    const elements: ReactElement[] = [];

    const cod = listSwitch("Cash on Delivery", "cod");
    const gcash = listSwitch("GCash", "gcash");
    const creditCard = listSwitch("Credit Card", "creditCard");

    elements.push(cod, gcash, creditCard);

    return listIterator(elements);
  };

  const getPaymentButton = () => {
    return (
      <View style={ShopPaymentStyles.buttonContainer}>
        <FormButton {...paymentButtonProps} />
      </View>
    );
  };

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Payment Options",
          style: ShopPaymentStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <Fragment>
      <Fragment>{getHeader()}</Fragment>
      <Fragment>{getPaymentForm()}</Fragment>
      <Fragment>{getPaymentButton()}</Fragment>
    </Fragment>
  );
};

export default ShopPayment;
