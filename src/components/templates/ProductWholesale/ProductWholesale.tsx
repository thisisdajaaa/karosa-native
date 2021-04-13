/**
 *
 * ProductWholesale
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";

import type { PropsType } from "./types";
import ProductWholesaleStyles from "./styles";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import ListInput from "@app/organisms/ListInput";
import { COMMON } from "@app/constants";
import { getPlatform, listIterator } from "@app/utils";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import FormButton from "@app/molecules/FormButton";
import WarningMessage from "@app/components/molecules/WarningMessage";

const ProductWholesaleTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

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

  const getWholesaleForm = () => {
    const elements: ReactElement[] = [];

    const min = listInput("min", "Minimum Order", "Set", false);
    const max = listInput("max", "Maximum Order", "Set", false);
    const unit = listInput("unit", "Unit Price", "Set Price/Grams", true);

    const warningMsg = (
      <WarningMessage message="Wholesale price will be hidden when the product is uder promotion." />
    );

    elements.push(warningMsg, min, max, unit);

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
          text: "Add Wholesale",
          style: ProductWholesaleStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={ProductWholesaleStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Fragment>{getWholesaleForm()}</Fragment>
        </ScrollView>
        <View style={ProductWholesaleStyles.buttonContainer}>
          <FormButton title="Submit" />
        </View>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default ProductWholesaleTemplate;
