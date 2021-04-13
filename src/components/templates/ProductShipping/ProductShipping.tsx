/**
 *
 * ProductShipping
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";

import type { PropsType } from "./types";
import ProductShippingStyles from "./styles";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import { getPlatform, listIterator } from "@app/utils";
import ListInput from "@app/organisms/ListInput";
import { COMMON } from "@app/constants";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import FormButton from "@app/molecules/FormButton";
import ListTitle from "@app/organisms/ListTitle";
import ListSwitch from "@app/organisms/ListSwitch";

const ProductShippingTemplate: FC<PropsType> = (props) => {
  const { onBack, disableSwitch } = props;

  const isIOS = getPlatform.getInstance() === "ios";

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    required: boolean
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required={required}
        variation={COMMON.VARIATION.TWO}
        keyboardType="number-pad"
      />
    );
  };

  const listSwitch = (
    name: string,
    title: string,
    disabled: boolean,
    info?: string
  ) => {
    return (
      <ListSwitch
        boldTitle={title}
        disabled={disabled}
        name={name}
        info={info}
        hasBottomDivider
      />
    );
  };

  const getShippingForm = () => {
    const elements: ReactElement[] = [];

    const spacer = <View style={ProductShippingStyles.formSpacer} />;
    const title = <ListTitle label="Packaging Size" hasBottomDivider />;
    const width = listInput("width", "Width (cm)", "Set", false);
    const length = listInput("length", "Length (cm)", "Set", false);
    const height = listInput("height", "Height (cm)", "Set", false);
    const pickUpBuyer = listSwitch("pickUpBuyer", "Pick Up by Buyer", false);

    const weight = listInput(
      "weight",
      "Weight per product",
      "Set Weight",
      true
    );

    const expressDelivery = listSwitch(
      "expressDelivery",
      "Express Delivery",
      disableSwitch,
      "(Weight required)"
    );

    const karosaDelivery = listSwitch(
      "karosaDelivery",
      "Karosa Delivery",
      disableSwitch,
      "(Weight required)"
    );

    const sellerCourier = listSwitch(
      "sellerCourier",
      "Seller Own Courier",
      false
    );

    elements.push(
      weight,
      spacer,
      title,
      width,
      length,
      height,
      spacer,
      expressDelivery,
      karosaDelivery,
      pickUpBuyer,
      sellerCourier
    );

    return listIterator(elements);
  };

  return (
    <Fragment>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Shipping Details",
          style: ProductShippingStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={ProductShippingStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Fragment>{getShippingForm()}</Fragment>
          <View style={ProductShippingStyles.buttonSpacer} />
          <View style={ProductShippingStyles.buttonContainer}>
            <FormButton title="Submit" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default ProductShippingTemplate;
