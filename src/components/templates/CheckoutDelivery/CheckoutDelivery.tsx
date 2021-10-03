/**
 *
 * CheckoutDelivery
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { listIterator } from "@app/utils";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import CheckoutDeliveryStyles, { StatusItemStyle } from "./styles";
import ListRadioGroup from "@app/components/organisms/ListRadioGroup";

const OPTIONS = [
  {
    id: "1",
    label: "Standard Express",
    info: "P50",
  },
  {
    id: "2",
    label: "Seller own Courier",
    info: "P50",
  },
  {
    id: "3",
    label: "Pick Up by Buyer",
  },
];

const CheckoutDeliveryTemplate: FC<PropsType> = (props) => {
  const {} = props;

  return (
    <Fragment>
      <Text
        text="Choose your delivery option"
        textStyle={CheckoutDeliveryStyles.txtProductStatus}
      />
      <View style={CheckoutDeliveryStyles.spacer} />
      <ListRadioGroup name="measurement" options={OPTIONS} />
    </Fragment>
  );
};

export default CheckoutDeliveryTemplate;
