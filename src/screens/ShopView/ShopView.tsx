/**
 *
 * ShopView
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ShopViewTemplate from "@app/templates/ShopView";

const ShopViewScreen: FC = () => {
  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <ShopViewTemplate onBack={handleBack} />;
};

export default ShopViewScreen;
