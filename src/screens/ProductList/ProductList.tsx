/**
 *
 * ProductList
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import ProductListTemplate from "@app/templates/ProductList";
import { useNavigation } from "@react-navigation/native";

import type { ProductListNavigation } from "./types";
import routes from "@app/navigators/routes";

const ProductList: FC = () => {
  const { goBack, navigate } = useNavigation();

  const navigation: ProductListNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onSearch: useCallback(() => {
      navigate(routes.SEARCH_MY_PRODUCT);
    }, [navigate]),
  };

  return <ProductListTemplate navigation={navigation} />;
};

export default ProductList;
