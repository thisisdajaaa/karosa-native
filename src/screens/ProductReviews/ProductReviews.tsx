/**
 *
 * ProductReviews
 * @format
 *
 */

import React, { FC } from "react";
import ProductReviewsTemplate from "@app/templates/ProductReviews";
import { useNavigation } from "@react-navigation/native";

const ProductReviews: FC = () => {
  const { goBack } = useNavigation();

  const handleBack = () => {
    goBack();
  };

  return <ProductReviewsTemplate onBack={handleBack} />;
};

export default ProductReviews;
