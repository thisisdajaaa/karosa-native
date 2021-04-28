/**
 *
 * ProductStatus
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
import ProductStatusStyles, { StatusItemStyle } from "./styles";

const ProductStatusTemplate: FC<PropsType> = (props) => {
  const { setProductStatus } = props;

  const statusItem = (
    color: string,
    text: string,
    status: ENUM.Product_Status
  ) => {
    return (
      <View style={ProductStatusStyles.statusContainer}>
        <TouchableWithoutFeedback onPress={() => setProductStatus(status)}>
          <ListItem bottomDivider>
            <View style={ProductStatusStyles.itemContainer}>
              <View style={StatusItemStyle(color).circle} />
              <Text text={text} textStyle={ProductStatusStyles.txtLabel} />
            </View>
          </ListItem>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const getBtmSheetTitle = () => {
    return (
      <Fragment>
        <Text
          text="Shop Status"
          textStyle={ProductStatusStyles.txtProductStatus}
        />
        <View style={ProductStatusStyles.spacer} />
      </Fragment>
    );
  };

  const getStatusItems = () => {
    const elements: ReactElement[] = [];

    const available = statusItem(
      theme.colors.primary,
      "Available",
      ENUM.Product_Status.Available
    );

    const planting = statusItem(
      theme.colors.dark5,
      "Planting Season",
      ENUM.Product_Status.Planting
    );

    const harvesting = statusItem(
      theme.colors.gold5,
      "Harvesting Season",
      ENUM.Product_Status.Harvesting
    );

    elements.push(available, planting, harvesting);

    return listIterator(elements);
  };

  return (
    <Fragment>
      <Fragment>{getBtmSheetTitle()}</Fragment>
      <Fragment>{getStatusItems()}</Fragment>
    </Fragment>
  );
};

export default ProductStatusTemplate;
