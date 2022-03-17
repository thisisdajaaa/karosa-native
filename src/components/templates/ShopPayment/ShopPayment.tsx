/**
 *
 * ShopPayment
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";
import { ShopPaymentForm } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { listIterator } from "@app/utils";
import Button from "@app/atoms/Button";
import Header from "@app/molecules/Header";
import ListSwitch from "@app/organisms/ListSwitch";
import validationSchema from "@app/screens/ShopPayment/validation";

import type { PropsType } from "./types";
import ShopPaymentStyles from "./styles";

const ShopPaymentTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values, submitForm } = useFormikContext<ShopPaymentForm>();

  const isFormValid = validationSchema.isValidSync(values);

  const listSwitch = (title: string, name: string) => {
    return <ListSwitch title={title} name={name} hasBottomDivider />;
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
        <Button title="Save" disabled={!isFormValid} onPress={submitForm} />
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
    <>
      <>{getHeader()}</>
      <>{getPaymentForm()}</>
      <>{getPaymentButton()}</>
    </>
  );
};

export default ShopPaymentTemplate;
