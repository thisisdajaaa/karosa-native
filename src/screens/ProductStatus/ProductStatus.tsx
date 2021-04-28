/**
 *
 * ProductStatus
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ENUM } from "@app/constants";
import { actions } from "@app/redux/shop";
import BottomSheet from "@app/molecules/BottomSheet";
import ProductStatusTemplate from "@app/templates/ProductStatus";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ProductStatusScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const setProductStatus = useCallback(
    (value: ENUM.Product_Status) => dispatch(actions.setProductStatus(value)),
    [dispatch]
  );

  const setStatusValue = useCallback(
    (value: ENUM.Product_Status) => {
      setProductStatus(value);
      sheetRef.current?.close();
    },
    [setProductStatus]
  );

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <ProductStatusTemplate setProductStatus={setStatusValue} />
    </BottomSheet>
  );
};

export default ProductStatusScreen;
