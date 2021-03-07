/**
 *
 * ShopMain
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import {
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { listIterator } from "@app/utils";
import { theme } from "@app/styles";
import { COMMON } from "@app/constants";
import type { PropsType as ListChevronType } from "@app/components/organisms/ListChevron/types";
import Text from "@app/atoms/Text";
import Profile from "@app/components/organisms/Profile";
import ListChevron from "@app/components/organisms/ListChevron";

import type { PropsType } from "./types";
import ShopMainStyles from "./styles";

const ShopMain: FC<PropsType> = (props) => {
  const {
    refreshing,
    onRefresh,
    shopName,
    isActive,
    navigation,
    address,
  } = props;

  const action = (onPress: () => void, icon: ReactElement, label: string) => {
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={ShopMainStyles.actionSubContainer}>
            {icon}
            <Text text={label} textStyle={ShopMainStyles.actionLabel} />
          </View>
        </TouchableWithoutFeedback>
      </Fragment>
    );
  };

  const icons = {
    ship: (
      <MaterialIcons name="local-shipping" style={ShopMainStyles.commonIcon} />
    ),
    cancel: (
      <MaterialCommunityIcons name="cancel" style={ShopMainStyles.commonIcon} />
    ),
    return: <AntDesign name="inbox" style={ShopMainStyles.inboxIcon} />,
  };

  const myProductsProps: ListChevronType = {
    title: "My Products",
    info: "80 Products",
    listColor: theme.colors.orange5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onProducts,
  };

  const marketingProps: ListChevronType = {
    title: "Marketing",
    listColor: theme.colors.blue5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onMarketing,
  };

  const financeProps: ListChevronType = {
    title: "Finance",
    listColor: theme.colors.red5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onFinance,
  };

  const reportsProps: ListChevronType = {
    title: "Reports",
    listColor: theme.colors.purple,
    variation: COMMON.VARIATION.ONE,
    onPress: navigation.onReports,
  };

  const getActions = () => {
    const elements: ReactElement[] = [];

    const toShip = action(() => navigation.onToShip, icons.ship, "To Ship");
    const cancelled = action(
      () => navigation.onCancelled,
      icons.cancel,
      "Cancelled"
    );
    const returns = action(() => navigation.onReturns, icons.return, "Returns");

    elements.push(toShip, cancelled, returns);

    return (
      <View style={ShopMainStyles.actionPhaseContainer}>
        <View style={ShopMainStyles.actionMainContainer}>
          <Fragment>{listIterator(elements)}</Fragment>
        </View>
      </View>
    );
  };

  const getProfile = () => {
    return (
      <Profile
        variation={COMMON.VARIATION.TWO}
        coverPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg"
        avatarPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
        onBack={navigation.onBack}
        onChat={navigation.onChat}
        onSettings={navigation.onSettings}
        shopName={shopName}
        address={address}
        rating="4.8"
        followers="4.3K"
        chatPerf="89%"
        isActive={isActive}
      />
    );
  };

  const getChevron = () => {
    const elements: ReactElement[] = [];

    const myProducts = <ListChevron {...myProductsProps} />;
    const marketing = <ListChevron {...marketingProps} />;
    const finance = <ListChevron {...financeProps} />;
    const reports = <ListChevron {...reportsProps} />;

    elements.push(myProducts, marketing, finance, reports);

    return (
      <View style={ShopMainStyles.choicesContainer}>
        <Fragment>{listIterator(elements)}</Fragment>
        <View style={ShopMainStyles.spacer} />
      </View>
    );
  };

  return (
    <Fragment>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
          />
        }>
        <Fragment>{getProfile()}</Fragment>
        <Fragment>{getActions()}</Fragment>
        <Fragment>{getChevron()}</Fragment>
      </ScrollView>
    </Fragment>
  );
};

export default ShopMain;
