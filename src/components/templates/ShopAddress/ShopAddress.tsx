/**
 *
 * ShopAddress
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { theme } from "@app/styles";
import { View } from "react-native";
import Header from "@app/molecules/Header";
import AddressDetails from "@app/molecules/AddressDetails";

import type { PropsType } from "./types";
import { formatPhoneNumber } from "./config";
import ShopAddressStyles from "./styles";

const ShopAddressTemplate: FC<PropsType> = (props) => {
  const {
    navigation,
    name,
    phoneNo,
    detailedAddress,
    isDefaultAddress,
  } = props;

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
          text: "Shop Address",
          style: ShopAddressStyles.txtHeader,
        }}
        rightComponent={{
          text: "Edit",
          style: ShopAddressStyles.txtEdit,
          onPress: navigation.onEdit,
        }}
      />
    );
  };

  const getContent = () => {
    return (
      <View style={ShopAddressStyles.container}>
        <AddressDetails
          name={name}
          phoneNumber={formatPhoneNumber(phoneNo)}
          detailedAddress={detailedAddress}
          isDefault={isDefaultAddress}
        />
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

export default ShopAddressTemplate;
