/**
 *
 * ShopMain
 * @format
 *
 */

import React, { FC, useCallback, useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions, selectors } from "@app/redux/shop";
import { useMemoizedSelector, useMount } from "@app/hooks";
import ShopMainTemplate from "@app/templates/ShopMain";
import routes from "@app/navigators/routes";

import type { ShopMainNavigation } from "./types";

const ShopMain: FC = () => {
  const dispatch = useDispatch();

  const [isRefreshDragged, setIsRefreshDragged] = useState(false);

  const { navigate, goBack } = useNavigation();

  const callShopInfoApi = useCallback(
    () => dispatch(actions.callShopInfoApi.request()),
    [dispatch]
  );

  const callShopAddressApi = useCallback(
    () => dispatch(actions.callShopAddressApi.request()),
    [dispatch]
  );

  const shopInfoResponse = useMemoizedSelector(selectors.getShopInfoResponse);
  const shopAddressResponse = useMemoizedSelector(
    selectors.getShopAddressResponse
  );

  const batchShopApiProcess = () => {
    batch(() => {
      callShopInfoApi();
      callShopAddressApi();
    });
  };

  useMount(batchShopApiProcess);

  const onRefresh = useCallback(() => {
    setIsRefreshDragged(true);
    batchShopApiProcess();
  }, [isRefreshDragged]);

  const navigation: ShopMainNavigation = {
    handleBack: useCallback(() => {
      goBack();
    }, [goBack]),
    handleSettings: useCallback(() => {
      navigate(routes.SHOP_SETTINGS);
    }, [navigate]),
    handleChat: useCallback(() => {
      navigate(routes.SHOP_CHAT);
    }, [navigate]),
    handleToShip: useCallback(() => {
      navigate(routes.SHOP_SHIP);
    }, [navigate]),
    handleCancelled: useCallback(() => {
      navigate(routes.SHOP_CANCELLED);
    }, [navigate]),
    handleReturns: useCallback(() => {
      navigate(routes.SHOP_RETURNS);
    }, [navigate]),
    handleProducts: useCallback(() => {
      navigate(routes.SHOP_RETURNS);
    }, [navigate]),
    handleMarketing: useCallback(() => {
      navigate(routes.SHOP_MARKETING);
    }, [navigate]),
    handleFinance: useCallback(() => {
      navigate(routes.SHOP_FINANCE);
    }, [navigate]),
    handleReports: useCallback(() => {
      navigate(routes.SHOP_REPORTS);
    }, [navigate]),
  };

  return (
    <ShopMainTemplate
      refreshing={isRefreshDragged && shopInfoResponse.isLoading}
      shopName={shopInfoResponse.response.shop.name}
      address={shopAddressResponse.response.detailed_address}
      isActive={shopInfoResponse.response.shop.isActive}
      navigation={navigation}
      onRefresh={onRefresh}
    />
  );
};

export default ShopMain;
