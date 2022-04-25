/**
 *
 * ProductVariant
 * @format
 *
 */

import React, { FC } from "react";
import ProductVariantTemplate from "@app/templates/ProductVariant";
import BottomSheet from "@app/molecules/BottomSheet";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ProductVariantScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <ProductVariantTemplate sheetRef={sheetRef} />
    </BottomSheet>
  );
};

export default ProductVariantScreen;
