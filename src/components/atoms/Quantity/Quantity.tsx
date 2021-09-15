/**
 *
 * Quantity
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import QuantityStyles from "./styles";
import { View, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Quantity: FC<PropsType> = (props) => {
  const { onDecrement, onIncrement, value } = props;

  return (
    <View style={QuantityStyles.container}>
      <TouchableOpacity onPress={onDecrement}>
        <View style={QuantityStyles.buttonDec}>
          <MaterialCommunityIcons name="minus" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <View style={QuantityStyles.countStyle}>
        <Text text={value} />
      </View>
      <TouchableOpacity onPress={onIncrement}>
        <View style={QuantityStyles.buttonInc}>
          <MaterialCommunityIcons name="plus" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
