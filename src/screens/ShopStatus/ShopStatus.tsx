/**
 *
 * ShopStatus
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ENUM } from "@app/constants";
import { actions } from "@app/redux/shop";
import BottomSheet from "@app/molecules/BottomSheet";
import ShopStatusTemplate from "@app/templates/ShopStatus";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ShopStatusScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const setShopStatus = useCallback(
    (value: ENUM.Product_Status) => dispatch(actions.setShopStatus(value)),
    [dispatch]
  );

  const setStatusValue = useCallback(
    (value: ENUM.Product_Status) => {
      setShopStatus(value);
      sheetRef.current?.close();
    },
    [setShopStatus]
  );

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <ShopStatusTemplate setShopStatus={setStatusValue} />
    </BottomSheet>
  );
};

export default ShopStatusScreen;
