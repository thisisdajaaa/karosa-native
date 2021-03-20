/**
 *
 * ShopDelete
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ShopDeleteTemplate from "@app/templates/ShopDelete";
import BottomSheet from "@app/components/molecules/BottomSheet";
import { actions } from "@app/redux/shop";
import routes from "@app/navigators/routes";

import { BTM_SHEET_HEIGHT } from "./config";
import type { PropsType } from "./types";

const ShopDelete: FC<PropsType> = (props) => {
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

export default ShopDelete;
