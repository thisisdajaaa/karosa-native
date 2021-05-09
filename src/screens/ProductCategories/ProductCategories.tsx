/**
 *
 * ProductCategories
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ProductCategoriesTemplate from "@app/templates/ProductCategories";

const ProductCategoriesScreen: FC = () => {
  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <ProductCategoriesTemplate onBack={handleBack} />;
};

export default ProductCategoriesScreen;
