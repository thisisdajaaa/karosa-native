/**
 *
 * ProductDetail
 * @format
 *
 */

import React from "react";
import ProductDetailTemplate from "@app/templates/ProductDetail";

import type { ProductDetailParams } from "./types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import routes from "@app/navigators/routes";
import { Product } from "@app/redux/api-models/common";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetailScreen = ({ navigation }: any) => {
  const { goBack, navigate } = useNavigation();

  const { params } = useRoute<RouteProp<ProductDetailParams, "Item">>();

  const handleReviews = () => {
    navigate(routes.PRODUCT_REVIEWS);
  };

  const handleRecommended = (item: Product) => {
    navigation.push("Stack", {
      screen: routes.PRODUCT_DETAILS,
      params: {
        ...item,
      },
    });
  };

  const handleBack = () => {
    goBack();
  };

  return (
    <ProductDetailTemplate
      routeParams={params}
      onReviews={handleReviews}
      onRecommended={handleRecommended}
      onBack={handleBack}
    />
  );
};

export default ProductDetailScreen;
