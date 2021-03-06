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
import BottomSheet from "@app/components/molecules/BottomSheet";
import ShopStatusTemplate from "@app/templates/ShopStatus";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ShopStatus: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const setShopStatus = useCallback(
    (value: ENUM.Shop_Status) => {
      dispatch(actions.setShopStatus(value));
      sheetRef.current?.close();
    },
    [dispatch]
  );

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <ShopStatusTemplate setShopStatus={setShopStatus} />
    </BottomSheet>
  );
};

export default React.memo(ShopStatus);
