/**
 *
 * ShopStatus
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
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
    status: ENUM.Product_Status
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
      <>
        <Text text="Shop Status" textStyle={ShopStatusStyles.txtShopStatus} />
        <View style={ShopStatusStyles.spacer} />
      </>
    );
  };

  const getStatusItems = () => {
    const elements: ReactElement[] = [];

    const active = statusItem(
      theme.colors.primary,
      "Available",
      ENUM.Product_Status.Available
    );
    const harvesting = statusItem(
      theme.colors.gold5,
      "Harvesting Season",
      ENUM.Product_Status.Harvesting
    );
    const planting = statusItem(
      theme.colors.dark5,
      "Planting Season",
      ENUM.Product_Status.Planting
    );

    elements.push(active, harvesting, planting);

    return listIterator(elements);
  };

  return (
    <>
      <>{getBtmSheetTitle()}</>
      <>{getStatusItems()}</>
    </>
  );
};

export default ShopStatusTemplate;
