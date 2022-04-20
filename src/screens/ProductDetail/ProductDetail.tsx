/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC } from "react";
import ProductDetailTemplate from "@app/templates/ProductDetail";

import type { PropsType } from "./types";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";

const ProductDetailScreen: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();

  const handleReviews = () => {
    navigate(routes.PRODUCT_REVIEWS);
  };

  const handleBack = () => {
    goBack();
  };

  return (
    <ProductDetailTemplate onReviews={handleReviews} onBack={handleBack} />
  );
};

export default ProductDetailScreen;
