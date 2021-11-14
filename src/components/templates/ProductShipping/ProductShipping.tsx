/**
 *
 * ProductShipping
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useFormikContext } from "formik";
import { ShippingDetailsForm } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import { COMMON } from "@app/constants";
import Header from "@app/molecules/Header";
import ListInput from "@app/organisms/ListInput";
import ListTitle from "@app/organisms/ListTitle";
import ListSwitch from "@app/organisms/ListSwitch";
import Button from "@app/atoms/Button";
import validationSchema from "@app/screens/ProductShipping/validation";

import type { PropsType } from "./types";
import ProductShippingStyles from "./styles";

const ProductShippingTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values, submitForm } = useFormikContext<ShippingDetailsForm>();

  const isIOS = getPlatform.getInstance() === "ios";
  const isFormValid = validationSchema.isValidSync(values);

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
        title={title}
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
    const title = (
      <ListTitle label="Packaging Size" required hasBottomDivider />
    );
    const width = listInput("width", "Width (cm)", "Set", false);
    const length = listInput("length", "Length (cm)", "Set", false);
    const height = listInput("height", "Height (cm)", "Set", false);
    const pickUpBuyer = listSwitch("pickUpBuyer", "Pick Up by Buyer", false);

    const deliveryOptions = (
      <ListTitle label="Delivery Options" required hasBottomDivider />
    );
    const weight = listInput(
      "weight",
      "Weight per product",
      "Set Weight",
      true
    );

    const lalamove = listSwitch("expressDelivery", "Lalamove", false);

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
      deliveryOptions,
      lalamove,
      pickUpBuyer,
      sellerCourier
    );

    return listIterator(elements);
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
          text: "Shipping Details",
          style: ProductShippingStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductShippingStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>{getShippingForm()}</>
        </ScrollView>
        <View style={ProductShippingStyles.buttonContainer}>
          <Button title="Submit" disabled={!isFormValid} onPress={submitForm} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductShippingTemplate;
