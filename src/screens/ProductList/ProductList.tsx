/**
 *
 * ProductList
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import ProductListTemplate from "@app/templates/ProductList";
import { useNavigation } from "@react-navigation/native";

import type { PropsType } from "./types";

const ProductList: FC<PropsType> = (props) => {
  const {} = props;

  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <ProductListTemplate onBack={handleBack} />;
};

export default ProductList;
