/**
 *
 * CheckoutDelivery
 * @format
 *
 */

import React, { FC } from "react";
import BottomSheet from "@app/molecules/BottomSheet";
import CheckoutDeliveryTemplate from "@app/templates/CheckoutDelivery";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const CheckoutDeliveryScreen: FC<PropsType> = (props) => {
  const { sheetRef, storeIndex } = props;

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <CheckoutDeliveryTemplate sheetRef={sheetRef} storeIndex={storeIndex} />
    </BottomSheet>
  );
};

export default CheckoutDeliveryScreen;
