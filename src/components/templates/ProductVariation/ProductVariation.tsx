/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";

import type { PropsType } from "./types";
import ProductVariationStyles from "./styles";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import ListImage from "@app/components/organisms/ListImage";
import ListInput from "@app/components/organisms/ListInput";
import { COMMON } from "@app/constants";
import { getPlatform, listIterator } from "@app/utils";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import FormButton from "@app/components/molecules/FormButton";

const ProductVariation: FC<PropsType> = (props) => {
  const { onBack } = props;

  const isIOS = getPlatform.getInstance() === "ios";

  const listInput = (name: string, label: string, placeholder: string) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.TWO}
        keyboardType="number-pad"
      />
    );
  };

  const getVariationForm = () => {
    const elements: ReactElement[] = [];

    const price = listInput("price", "Price", "Set price per variation");
    const weight = listInput("weight", "Weight per product", "Set Weight");
    const stocks = listInput("stocks", "Stocks", "Set Stock");
    const variationImg = <ListImage name="variationImg" hasBottomDivider />;

    const variationNm = (
      <ListInput
        name="variationNm"
        placeholder="Enter Variation Name"
        label="Name"
        maxLen={100}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.ONE}
      />
    );

    elements.push(variationImg, variationNm, price, weight, stocks);

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
          text: "Add Variation",
          style: ProductVariationStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={ProductVariationStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Fragment>{getVariationForm()}</Fragment>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={ProductVariationStyles.buttonContainer}>
        <FormButton title="Submit" />
      </View>
    </Fragment>
  );
};

export default ProductVariation;
