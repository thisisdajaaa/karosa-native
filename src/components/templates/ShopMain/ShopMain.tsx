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

  const getActions = () => {
    const elements: ReactElement[] = [];

    const icons = {
      ship: (
        <MaterialIcons
          name="local-shipping"
          style={ShopMainStyles.commonIcon}
        />
      ),
      cancel: (
        <MaterialCommunityIcons
          name="cancel"
          style={ShopMainStyles.commonIcon}
        />
      ),
      return: <AntDesign name="inbox" style={ShopMainStyles.inboxIcon} />,
    };

    const toShip = action(() => navigation.handleToShip, icons.ship, "To Ship");
    const cancelled = action(
      () => navigation.handleCancelled,
      icons.cancel,
      "Cancelled"
    );
    const returns = action(
      () => navigation.handleReturns,
      icons.return,
      "Returns"
    );

    elements.push(toShip, cancelled, returns);

    return listIterator(elements);
  };

  const getChevron = () => {
    const elements: ReactElement[] = [];

    const myProductsProps: ListChevronType = {
      title: "My Products",
      info: "80 Products",
      listColor: theme.colors.orange5,
      variation: COMMON.VARIATION.ONE,
      hasBottomDivider: true,
      onPress: navigation.handleProducts,
    };

    const marketingProps: ListChevronType = {
      title: "Marketing",
      listColor: theme.colors.blue5,
      variation: COMMON.VARIATION.ONE,
      hasBottomDivider: true,
      onPress: navigation.handleMarketing,
    };

    const financeProps: ListChevronType = {
      title: "Finance",
      listColor: theme.colors.red5,
      variation: COMMON.VARIATION.ONE,
      hasBottomDivider: true,
      onPress: navigation.handleFinance,
    };

    const reportsProps: ListChevronType = {
      title: "Reports",
      listColor: theme.colors.purple,
      variation: COMMON.VARIATION.ONE,
      onPress: navigation.handleReports,
    };

    const myProducts = <ListChevron {...myProductsProps} />;
    const marketing = <ListChevron {...marketingProps} />;
    const finance = <ListChevron {...financeProps} />;
    const reports = <ListChevron {...reportsProps} />;

    elements.push(myProducts, marketing, finance, reports);

    return listIterator(elements);
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
        <Profile
          variation={COMMON.VARIATION.TWO}
          coverPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg"
          avatarPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
          onBack={navigation.handleBack}
          onChat={navigation.handleChat}
          onSettings={navigation.handleSettings}
          shopName={shopName}
          address={address}
          rating="4.8"
          followers="4.3K"
          chatPerf="89%"
          isActive={isActive}
        />
        <View style={ShopMainStyles.actionPhaseContainer}>
          <View style={ShopMainStyles.actionMainContainer}>{getActions()}</View>
        </View>
        <View style={ShopMainStyles.choicesContainer}>{getChevron()}</View>
        <View style={ShopMainStyles.spacer} />
      </ScrollView>
    </Fragment>
  );
};

export default ShopMain;
