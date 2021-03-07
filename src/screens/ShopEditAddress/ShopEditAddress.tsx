/**
 *
 * ShopEditAddress
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ShopEditAddressTemplate from "@app/templates/ShopEditAddress";

const ShopEditAddress: FC = () => {
  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <ShopEditAddressTemplate onBack={handleBack} />;
};

export default ShopEditAddress;
