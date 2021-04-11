/**
 *
 * ProductNew
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import {
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  ScrollView,
  View,
} from "react-native";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import { COMMON } from "@app/constants";
import Header from "@app/molecules/Header";
import ListImage from "@app/organisms/ListImage";
import ListInput from "@app/organisms/ListInput";
import ListChevron from "@app/organisms/ListChevron";
import ListStatus from "@app/organisms/ListStatus";
import ListSwitch from "@app/organisms/ListSwitch";

import type { PropsType } from "./types";
import ProductNewStyles from "./styles";

const ProductNew: FC<PropsType> = (props) => {
  const { navigation, sheetRefs, statusColor, statusValue } = props;

  const isIOS = getPlatform.getInstance() === "ios";

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    keyboardType?: KeyboardTypeOptions
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.TWO}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    );
  };

  const listInputArea = (
    name: string,
    label: string,
    maxLen: number,
    placeholder: string
  ) => {
    return (
      <ListInput
        name={name}
        placeholder={placeholder}
        label={label}
        maxLen={maxLen}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.ONE}
      />
    );
  };

  const listChevron = (
    title: string,
    onPress: () => void,
    required: boolean
  ) => {
    return (
      <ListChevron
        title={title}
        onPress={onPress}
        required={required}
        variation={COMMON.VARIATION.ONE}
        hasBottomDivider
      />
    );
  };

  const getProductForm = () => {
    const elements: ReactElement[] = [];

    const productImg = <ListImage name="productImg" hasBottomDivider />;
    const weight = listInput("weight", "Weight", "Set Weight", "number-pad");
    const stocks = listInput("stocks", "Stocks", "Set Stock", "number-pad");
    const categories = listChevron("Categories", navigation.onCategory, true);
    const variation = listChevron("Variation", navigation.onVariation, true);
    const wholesale = listChevron("Wholesale", navigation.onWholesale, true);

    const shipping = listChevron(
      "Shipping Details",
      navigation.onShipping,
      true
    );

    const productNm = listInputArea(
      "productNm",
      "Product Name",
      100,
      "Enter Product Name"
    );

    const description = listInputArea(
      "description",
      "Description",
      1000,
      "Enter Description"
    );

    const price = listInput(
      "price",
      "Price",
      "Set price per product",
      "number-pad"
    );

    const measurement = listChevron(
      "Unit of Measurement",
      sheetRefs.measurement,
      true
    );

    const shelfLife = listInput(
      "shelfLife",
      "Shelf Life",
      "Set Shelf Life",
      "number-pad"
    );

    const status = (
      <ListStatus
        label="Status"
        onPress={sheetRefs.status}
        color={statusColor}
        value={statusValue}
        required
        hasBottomDivider
      />
    );

    const availability = listChevron(
      "Availability",
      sheetRefs.availability,
      false
    );

    const preOrder = (
      <ListSwitch title="Pre-order" name="preOrder" hasBottomDivider />
    );

    elements.push(
      productImg,
      productNm,
      description,
      categories,
      price,
      measurement,
      weight,
      stocks,
      shelfLife,
      status,
      availability,
      variation,
      wholesale,
      preOrder,
      shipping
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
          onPress: navigation.onBack,
        }}
        centerComponent={{
          text: "Add Product",
          style: ProductNewStyles.txtHeader,
        }}
        rightComponent={{
          text: "Edit",
          style: ProductNewStyles.txtSave,
          onPress: () => alert("saved"),
        }}
      />
      <KeyboardAvoidingView
        style={ProductNewStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Fragment>{getProductForm()}</Fragment>
          <View style={ProductNewStyles.spacer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default ProductNew;
