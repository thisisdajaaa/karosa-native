/**
 *
 * ShopAddress
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import AddressDetails from "@app/molecules/AddressDetails";

import type { PropsType } from "./types";
import ShopAddressStyles from "./styles";
import { formatPhoneNumber } from "@app/utils";

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

  return (
    <>
      <>{getHeader()}</>
      <View style={ShopAddressStyles.container}>
        <AddressDetails
          name={name}
          phoneNumber={formatPhoneNumber(phoneNo)}
          detailedAddress={detailedAddress}
          isDefault={isDefaultAddress}
        />
      </View>
    </>
  );
};

export default ShopAddressTemplate;
