/**
 *
 * ProductReviews
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import ProductReviewsTemplate from "@app/templates/ProductReviews";
import { useNavigation } from "@react-navigation/native";

const ProductReviews: FC<PropsType> = (props) => {
  const {} = props;

  const { goBack } = useNavigation();

  const handleBack = () => {
    goBack();
  };

  return <ProductReviewsTemplate onBack={handleBack} />;
};

export default ProductReviews;
