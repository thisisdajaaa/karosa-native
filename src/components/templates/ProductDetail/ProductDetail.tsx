/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import { View } from "react-native";
import ProductHeader from "./ProductHeader";

const ProductDetailTemplate: FC<PropsType> = (props) => {
  const {} = props;

  return (
    <View style={{ flex: 1 }}>
      <ProductHeader />
    </View>
  );
};

export default ProductDetailTemplate;
