/**
 *
 * ShopAddress
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectors } from "@app/redux/shop";
import { useMemoizedSelector } from "@app/hooks";
import ShopAddressTemplate from "@app/templates/ShopAddress";
import routes from "@app/navigators/routes";

import type { ShopAddressNavigation } from "./types";

const ShopAddressScreen: FC = () => {
  const { goBack, navigate } = useNavigation();

  const {
    name,
    isDefaultAddress,
    detailed_address,
    phoneNo,
  } = useMemoizedSelector(selectors.getShopAddressResponse).response;

  const navigation: ShopAddressNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onEdit: useCallback(() => {
      navigate(routes.SHOP_EDIT_ADDRESS);
    }, [navigate]),
  };

  return (
    <ShopAddressTemplate
      navigation={navigation}
      name={name}
      isDefaultAddress={isDefaultAddress}
      detailedAddress={detailed_address}
      phoneNo={phoneNo}
    />
  );
};

export default ShopAddressScreen;
