/**
 *
 * ShopTerms
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ShopTermsTemplate from "@app/templates/ShopTerms";
import routes from "@app/navigators/routes";

const ShopTerms: FC = () => {
  const { navigate } = useNavigation();

  const handleAgree = useCallback(() => {
    navigate(routes.SHOP_SETTINGS);
  }, [navigate]);

  const handleNotNow = useCallback(() => {
    navigate(routes.AUTH_MAIN);
  }, [navigate]);

  return <ShopTermsTemplate onAgree={handleAgree} onNotNow={handleNotNow} />;
};

export default ShopTerms;
