/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { View } from "react-native";
import { theme } from "@app/styles";
import { COMMON } from "src/constants";
import { listIterator } from "@app/utils";
import type { PropsType as ListChevronType } from "@app/components/organisms/ListChevron/types";
import type { PropsType as ListInputType } from "@app/components/organisms/ListInput/types";
import type { PropsType as ListStatusType } from "@app/components/organisms/ListStatus/types";
import Header from "@app/components/molecules/Header";
import FormImagePicker from "@app/components/molecules/FormImagePicker";
import ListInput from "@app/components/organisms/ListInput";
import ListStatus from "@app/components/organisms/ListStatus";
import ListChevron from "@app/components/organisms/ListChevron";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import ShopSettingsStyles from "./styles";

const ShopSettings: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const shopNameProps: ListInputType = {
    name: "shopName",
    label: "Shop Name",
    placeholder: "Set Shop Name",
    hasBottomDivider: true,
    variation: COMMON.VARIATION.TWO,
  };

  const shopStatusProps: ListStatusType = {
    label: "Shop Status",
    onPress: () => sheetRef.current?.open(),
    hasBottomDivider: true,
    color: "gold",
    value: "Available",
  };

  const shopAddressProps: ListChevronType = {
    title: "Shop Address",
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: () => alert("gg"),
  };

  const shopPaymentProps: ListChevronType = {
    title: "Payment Option",
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: () => alert("gg"),
  };

  const getHeader = () => {
    return (
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: () => alert("back"),
        }}
        centerComponent={{
          text: "Shop Settings",
          style: ShopSettingsStyles.txtHeader,
        }}
        rightComponent={{
          text: "Save",
          style: ShopSettingsStyles.txtSave,
          onPress: () => alert("save"),
        }}
      />
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
      <View style={ShopSettingsStyles.mainBtnDeleteContainer}>
        <Button
          onPress={() => alert("deleteShop")}
          title="Delete Shop"
          buttonStyle={ShopSettingsStyles.subBtnDeleteContainer}
          titleStyle={ShopSettingsStyles.txtBtnDelete}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <Fragment>{getHeader()}</Fragment>
      <View style={ShopSettingsStyles.container}>
        <Fragment>{getImageForm()}</Fragment>
        <Fragment>{getListForm()}</Fragment>
        <Fragment>{getBtnDeleteShop()}</Fragment>
      </View>
    </Fragment>
  );
};

export default ShopSettings;
