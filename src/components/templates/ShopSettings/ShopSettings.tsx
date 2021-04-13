/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { StatusBar, View } from "react-native";
import { theme } from "@app/styles";
import { COMMON } from "src/constants";
import { listIterator } from "@app/utils";
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";
import type { PropsType as ListInputType } from "@app/organisms/ListInput/types";
import type { PropsType as ListStatusType } from "@app/organisms/ListStatus/types";
import Header from "@app/molecules/Header";
import FormImagePicker from "@app/molecules/FormImagePicker";
import ListInput from "@app/organisms/ListInput";
import ListStatus from "@app/organisms/ListStatus";
import ListChevron from "@app/organisms/ListChevron";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import ShopSettingsStyles from "./styles";

const ShopSettingsTemplate: FC<PropsType> = (props) => {
  const {
    shopStatusRef,
    shopDeleteRef,
    statusColor,
    statusValue,
    navigation,
    submitForm,
  } = props;

  const shopNameProps: ListInputType = {
    name: "shopName",
    label: "Shop Name",
    placeholder: "Set Shop Name",
    hasBottomDivider: true,
    variation: COMMON.VARIATION.TWO,
  };

  const shopStatusProps: ListStatusType = {
    label: "Shop Status",
    onPress: () => shopStatusRef.current?.open(),
    hasBottomDivider: true,
    color: statusColor,
    value: statusValue,
  };

  const shopAddressProps: ListChevronType = {
    title: "Shop Address",
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onAddress,
  };

  const shopPaymentProps: ListChevronType = {
    title: "Payment Option",
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onPayment,
  };

  const getHeader = () => {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Header
          leftComponent={{
            icon: "arrow-back",
            color: theme.colors.primary,
            onPress: navigation.onBack,
          }}
          centerComponent={{
            text: "Shop Settings",
            style: ShopSettingsStyles.txtHeader,
          }}
          rightComponent={{
            text: "Save",
            style: ShopSettingsStyles.txtSave,
            onPress: submitForm,
          }}
        />
      </Fragment>
    );
  };

  const getImageForm = () => {
    return (
      <Fragment>
        <FormImagePicker name="coverPhoto" variation={COMMON.VARIATION.THREE} />
        <View style={ShopSettingsStyles.avatarContainer}>
          <FormImagePicker
            name="avatarPhoto"
            variation={COMMON.VARIATION.TWO}
          />
        </View>
        <View style={ShopSettingsStyles.spacer} />
      </Fragment>
    );
  };

  const getListForm = () => {
    const elements: ReactElement[] = [];

    const shopName = <ListInput {...shopNameProps} />;
    const shopStatus = <ListStatus {...shopStatusProps} />;
    const shopAddress = <ListChevron {...shopAddressProps} />;
    const shopPayment = <ListChevron {...shopPaymentProps} />;

    elements.push(shopName, shopStatus, shopAddress, shopPayment);

    return listIterator(elements);
  };

  const getBtnDeleteShop = () => {
    return (
      <View style={ShopSettingsStyles.mainButtonContainer}>
        <Button
          onPress={() => shopDeleteRef.current?.open()}
          title="Delete Shop"
          buttonStyle={ShopSettingsStyles.subButtonContainer}
          titleStyle={ShopSettingsStyles.txtBtnDelete}
        />
      </View>
    );
  };

  const getContent = () => {
    return (
      <View style={ShopSettingsStyles.container}>
        <Fragment>{getImageForm()}</Fragment>
        <Fragment>{getListForm()}</Fragment>
        <Fragment>{getBtnDeleteShop()}</Fragment>
      </View>
    );
  };

  return (
    <Fragment>
      <Fragment>{getHeader()}</Fragment>
      <Fragment>{getContent()}</Fragment>
    </Fragment>
  );
};

export default ShopSettingsTemplate;
