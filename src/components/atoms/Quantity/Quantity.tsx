/**
 *
 * Quantity
 * @format
 *
 */

import React, { FC, useState } from "react";

import type { PropsType } from "./types";
import QuantityStyles from "./styles";
import { View, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";

const Quantity: FC<PropsType> = (props) => {
  const {} = props;

  const [quantity, setQuantity] = useState(0);

  const Increment = () => {
    setQuantity(quantity + 1);
  };

  const Decrement = () => {
    quantity <= 0 ? 0 : setQuantity(quantity - 1);
  };

  return (
    <View style={QuantityStyles.container}>
      <TouchableOpacity onPress={Decrement}>
        <View style={QuantityStyles.buttonDec}>
          <Text text={"-"} />
        </View>
      </TouchableOpacity>
      <View style={QuantityStyles.countStyle}>
        <Text text={quantity.toString()} />
      </View>
      <TouchableOpacity onPress={Increment}>
        <View style={QuantityStyles.buttonInc}>
          <Text text={"+"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
