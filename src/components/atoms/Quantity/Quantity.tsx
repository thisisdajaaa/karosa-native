/**
 *
 * Quantity
 * @format
 *
 */

import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import QuantityStyles, { ButtonDisabledStyles } from "./styles";
import { ICON_SIZE } from "./config";

const Quantity: FC<PropsType> = (props) => {
  const {
    onDecrement,
    onIncrement,
    disableDecrement,
    disableIncrement,
    value,
  } = props;

  return (
    <View style={QuantityStyles.container}>
      <TouchableOpacity onPress={onDecrement} disabled={disableDecrement}>
        <View
          style={
            ButtonDisabledStyles(Boolean(disableDecrement)).buttonContainer
          }
        >
          <MaterialCommunityIcons name="minus" size={ICON_SIZE} color="white" />
        </View>
      </TouchableOpacity>
      <View style={QuantityStyles.countStyle}>
        <Text text={value} />
      </View>
      <TouchableOpacity onPress={onIncrement} disabled={disableIncrement}>
        <View
          style={
            ButtonDisabledStyles(Boolean(disableIncrement)).buttonContainer
          }
        >
          <MaterialCommunityIcons name="plus" size={ICON_SIZE} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
