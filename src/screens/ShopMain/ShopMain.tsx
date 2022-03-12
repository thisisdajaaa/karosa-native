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
import { useMemoizedSelector } from "@app/hooks";
import ShopMainTemplate from "@app/templates/ShopMain";
import routes from "@app/navigators/routes";

import type { ShopMainNavigation } from "./types";

const ShopMainScreen: FC = () => {
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

  // useMount(batchShopApiProcess); no api yet

  const onRefresh = useCallback(() => {
    setIsRefreshDragged(true);
    batchShopApiProcess();
  }, [isRefreshDragged]);

  const navigation: ShopMainNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onSettings: useCallback(() => {
      navigate(routes.SHOP_SETTINGS);
    }, [navigate]),
    onChat: useCallback(() => {
      navigate(routes.SHOP_CHAT);
    }, [navigate]),
    onToShip: useCallback(() => {
      navigate(routes.SHOP_SHIP);
    }, [navigate]),
    onCancelled: useCallback(() => {
      navigate(routes.SHOP_CANCELLED);
    }, [navigate]),
    onReturns: useCallback(() => {
      navigate(routes.SHOP_RETURNS);
    }, [navigate]),
    onProducts: useCallback(() => {
      navigate(routes.SHOP_PRODUCTS);
    }, [navigate]),
    onMarketing: useCallback(() => {
      navigate(routes.SHOP_MARKETING);
    }, [navigate]),
    onFinance: useCallback(() => {
      navigate(routes.SHOP_FINANCE);
    }, [navigate]),
    onReports: useCallback(() => {
      navigate(routes.SHOP_REPORTS);
    }, [navigate]),
  };

  return (
    <ShopMainTemplate
      refreshing={isRefreshDragged && shopInfoResponse.isLoading}
      shopName={shopInfoResponse.response.shop.name}
      address={shopAddressResponse.response.detailed_address}
      isActive={shopInfoResponse.response?.shop.isActive}
      navigation={navigation}
      onRefresh={onRefresh}
    />
  );
};

export default ShopMainScreen;
