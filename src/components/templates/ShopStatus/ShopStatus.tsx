/**
 *
 * ShopStatus
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { listIterator } from "@app/utils";
import { ENUM } from "@app/constants";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ShopStatusStyles, { StatusItemStyle } from "./styles";

const ShopStatusTemplate: FC<PropsType> = (props) => {
  const { setShopStatus } = props;

  const statusItem = (
    color: string,
    text: string,
    status: ENUM.Shop_Status
  ) => {
    return (
      <View style={ShopStatusStyles.statusContainer}>
        <TouchableWithoutFeedback onPress={() => setShopStatus(status)}>
          <ListItem bottomDivider>
            <View style={ShopStatusStyles.itemContainer}>
              <View style={StatusItemStyle(color).circle} />
              <Text text={text} textStyle={ShopStatusStyles.txtLabel} />
            </View>
          </ListItem>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const getBtmSheetTitle = () => {
    return (
      <Fragment>
        <Text text="Shop Status" textStyle={ShopStatusStyles.txtShopStatus} />
        <View style={ShopStatusStyles.spacer} />
      </Fragment>
    );
  };

  const getStatusItems = () => {
    const elements: ReactElement[] = [];

    const active = statusItem(
      theme.colors.primary,
      "Active",
      ENUM.Shop_Status.Active
    );
    const vacation = statusItem(
      theme.colors.orange5,
      "On Vacation",
      ENUM.Shop_Status.OnVacation
    );
    const harvesting = statusItem(
      theme.colors.gold5,
      "Harvesting Season",
      ENUM.Shop_Status.Harvesting
    );
    const planting = statusItem(
      theme.colors.blue10,
      "Planting Season",
      ENUM.Shop_Status.Planting
    );

    elements.push(active, vacation, harvesting, planting);

    return listIterator(elements);
  };

  return (
    <Fragment>
      <Fragment>{getBtmSheetTitle()}</Fragment>
      <Fragment>{getStatusItems()}</Fragment>
    </Fragment>
  );
};

export default ShopStatusTemplate;
