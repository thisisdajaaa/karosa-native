/**
 *
 * UserAccountLogout
 * @format
 *
 */

import React, { FC } from "react";
import BottomSheet from "@app/molecules/BottomSheet";
import UserAccountLogoutTemplate from "@app/templates/UserAccountLogout";
import { resetAllState } from "@app/redux/actions";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";
import { useDispatch } from "react-redux";

const UserAccountLogoutScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const resetState = () => dispatch(resetAllState());

  return (
    <BottomSheet height={BTM_SHEET_HEIGHT} ref={sheetRef}>
      <UserAccountLogoutTemplate sheetRef={sheetRef} resetState={resetState} />
    </BottomSheet>
  );
};

export default UserAccountLogoutScreen;
