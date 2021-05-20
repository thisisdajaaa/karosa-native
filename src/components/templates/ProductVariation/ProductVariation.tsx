/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { theme } from "@app/styles";
import { COMMON } from "@app/constants";
import { getPlatform, listIterator } from "@app/utils";
import Header from "@app/molecules/Header";
import ListImage from "@app/organisms/ListImage";
import ListInput from "@app/organisms/ListInput";
import FormButton from "@app/molecules/FormButton";

import type { PropsType } from "./types";
import ProductVariationStyles from "./styles";

const ProductVariationTemplate: FC<PropsType> = (props) => {
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
          text: "Add Variation",
          style: ProductVariationStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductVariationStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>{getVariationForm()}</>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={ProductVariationStyles.buttonContainer}>
        <FormButton title="Submit" />
      </View>
    </>
  );
};

export default ProductVariationTemplate;
