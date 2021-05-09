/**
 *
 * ShopDelete
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "@app/redux/shop";
import ShopDeleteTemplate from "@app/templates/ShopDelete";
import BottomSheet from "@app/molecules/BottomSheet";
import routes from "@app/navigators/routes";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ShopDeleteScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const callShopDeleteApi = useCallback(
    () => dispatch(actions.callShopDeleteApi.request()),
    [dispatch]
  );

  const handleDelete = useCallback(() => {
    sheetRef.current?.close();
    callShopDeleteApi();
    navigate(routes.ACCOUNTS_MAIN);
  }, [navigate]);

  return (
    <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
      <ShopDeleteTemplate onDelete={handleDelete} sheetRef={sheetRef} />
    </BottomSheet>
  );
};

export default ShopDeleteScreen;
