/**
 *
 * ProductWholesale
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useFormikContext } from "formik";
import { WholesaleForm } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import { COMMON } from "@app/constants";
import Header from "@app/molecules/Header";
import ListInput from "@app/organisms/ListInput";
import Button from "@app/atoms/Button";
import WarningMessage from "@app/molecules/WarningMessage";
import validationSchema from "@app/screens/ProductWholesale/validation";

import type { PropsType } from "./types";
import { MAX_LENGTH } from "./config";
import ProductWholesaleStyles from "./styles";

const ProductWholesaleTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values, submitForm } = useFormikContext<WholesaleForm>();

  const isIOS = getPlatform.getInstance() === "ios";
  const isFormValid = validationSchema.isValidSync(values);

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    length: number
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required={false}
        maxLen={length}
        variation={COMMON.VARIATION.TWO}
        keyboardType="number-pad"
      />
    );
  };

  const getWholesaleForm = () => {
    const elements: ReactElement[] = [];

    const min = listInput("min", "Minimum Order", "Set", MAX_LENGTH.MINMAX);

    const max = listInput("max", "Maximum Order", "Set", MAX_LENGTH.MINMAX);

    const unit = listInput(
      "unit",
      "Unit Price",
      "Set Price/Grams",
      MAX_LENGTH.UNIT
    );

    const warningMsg = (
      <WarningMessage message="Wholesale price will be hidden when the product is under promotion." />
    );

    elements.push(warningMsg, min, max, unit);

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
          text: "Add Wholesale",
          style: ProductWholesaleStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductWholesaleStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>{getWholesaleForm()}</>
        </ScrollView>
        <View style={ProductWholesaleStyles.buttonContainer}>
          <Button title="Submit" disabled={!isFormValid} onPress={submitForm} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductWholesaleTemplate;
