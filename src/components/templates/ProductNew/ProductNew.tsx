/**
 *
 * ProductNew
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import {
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  ScrollView,
  View,
} from "react-native";
import { useFormikContext } from "formik";
import { ProductForm } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { getPlatform, listIterator, WithIcon } from "@app/utils";
import { COMMON } from "@app/constants";
import Header from "@app/molecules/Header";
import ListInput from "@app/organisms/ListInput";
import ListChevron from "@app/organisms/ListChevron";
import ListStatus from "@app/organisms/ListStatus";
import ListSwitch from "@app/organisms/ListSwitch";
import ListDatepicker from "@app/organisms/ListDatepicker";

import type { PropsType } from "./types";
import ProductNewStyles from "./styles";
import ProductImages from "./ProductImages";

const ProductNewTemplate: FC<PropsType> = (props) => {
  const { navigation, sheetRefs, statusColor, statusValue } = props;

  const { submitForm, values } = useFormikContext<ProductForm>();

  const isIOS = getPlatform.getInstance() === "ios";

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    icon: WithIcon,
    keyboardType?: KeyboardTypeOptions
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        icon={icon}
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
    required: boolean,
    icon: WithIcon
  ) => {
    return (
      <ListChevron
        title={title}
        onPress={onPress}
        required={required}
        variation={COMMON.VARIATION.ONE}
        icon={icon}
        hasBottomDivider
      />
    );
  };

  const getProductForm = () => {
    const elements: ReactElement[] = [];

    const separator = <View style={ProductNewStyles.separator} />;

    const productImg = <ProductImages />;

    const stocks = listInput(
      "stocks",
      "Stocks",
      "Set",
      {
        group: "products",
        name: "stock",
        height: 20,
        width: 20,
      },
      "number-pad"
    );

    const categories = listChevron("Categories", navigation.onCategory, true, {
      group: "products",
      name: "listBullet",
      height: 20,
      width: 20,
    });

    const variation = listChevron("Variation", navigation.onVariation, true, {
      group: "products",
      name: "variation",
      height: 20,
      width: 20,
    });

    const wholesale = listChevron("Wholesale", navigation.onWholesale, true, {
      group: "products",
      name: "wholesale",
      height: 20,
      width: 20,
    });

    const shipping = listChevron(
      "Shipping Details",
      navigation.onShipping,
      true,
      {
        group: "products",
        name: "shippingDetails",
        height: 20,
        width: 20,
      }
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
      "Set",
      {
        group: "products",
        name: "price",
        height: 20,
        width: 20,
      },
      "number-pad"
    );

    const shelfLife = (
      <ListDatepicker
        name="shelfLife"
        label="Best Before"
        icon={{
          group: "products",
          name: "shelfLife",
          height: 20,
          width: 20,
        }}
        hasBottomDivider
        required
      />
    );

    const status = (
      <ListStatus
        label="Status"
        onPress={sheetRefs.status}
        color={statusColor}
        value={statusValue}
        required
        icon={{
          group: "products",
          name: "status",
          height: 20,
          width: 20,
        }}
        hasBottomDivider
      />
    );

    const availability = listChevron(
      "Availability",
      sheetRefs.availability,
      false,
      {
        group: "products",
        name: "availability",
        height: 20,
        width: 20,
      }
    );

    const upcomingHarvest = (
      <ListSwitch
        title="Upcoming Harvest"
        icon={{
          group: "products",
          name: "harvest",
          height: 15,
          width: 20,
        }}
        name="upcomingHarvest"
        hasBottomDivider
      />
    );

    const preOrder = (
      <ListSwitch
        title="Pre-order"
        name="preOrder"
        hasBottomDivider
        icon={{
          group: "products",
          name: "preOrder",
          height: 20,
          width: 20,
        }}
      />
    );

    const estimateDate = (
      <ListDatepicker
        name="estimateDate"
        label="Estimate Available Date"
        icon={{
          group: "products",
          name: "estimateDate",
          height: 20,
          width: 20,
        }}
        hasBottomDivider
        required
      />
    );

    if (values.upcomingHarvest) {
      elements.push(
        productImg,
        separator,
        productNm,
        separator,
        description,
        separator,
        upcomingHarvest,
        separator,
        estimateDate
      );
    } else {
      elements.push(
        productImg,
        separator,
        productNm,
        separator,
        description,
        separator,
        upcomingHarvest,
        separator,
        categories,
        price,
        stocks,
        shelfLife,
        status,
        availability,
        variation,
        separator,
        wholesale,
        separator,
        preOrder,
        separator,
        shipping
      );
    }

    return listIterator(elements);
  };

  const getHeader = () => {
    return (
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
          text: "Save",
          style: ProductNewStyles.txtSave,
          onPress: submitForm,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductNewStyles.container}
        behavior={isIOS ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <>{getProductForm()}</>
          <View style={ProductNewStyles.spacer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductNewTemplate;
