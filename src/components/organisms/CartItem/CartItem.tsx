/**
 *
 * CartItem
 * @format
 *
 */

import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import { CheckBox as RnCheckbox } from "react-native-elements";
import Quantity from "@app/atoms/Quantity";
import Image from "@app/atoms/Image";
import { COLOR } from "./config";
import type { PropsType } from "./types";
import CartItemStyles from "./styles";
import Picker from "@app/molecules/Picker";

const CartItem: FC<PropsType> = (props) => {
  const {
    productImage,
    productName,
    productPrice,
    checked,
    picker,
    onCheckChange,
  } = props;
  const [isChecked, setChecked] = useState<boolean>(false);

  const [currentMetric, setSelectedMetric] = useState(0);

  useEffect(() => {
    setChecked(!checked);
  }, [checked]);

  const onPress = () => {
    setChecked(!isChecked);
    if (onCheckChange != null) {
      onCheckChange();
    }
  };

  const ItemCheckbox = () => {
    return (
      <RnCheckbox
        checkedColor={COLOR}
        titleProps={{ style: CartItemStyles.text }}
        containerStyle={CartItemStyles.container}
        checked={isChecked}
        onPress={onPress}
      />
    );
  };

  return (
    <View style={CartItemStyles.itemSection}>
      <View style={CartItemStyles.checkBox}>
        <ItemCheckbox />
        <Image
          source={{
            uri: productImage,
          }}
          imageStyle={CartItemStyles.productImage}
        />
      </View>
      <View style={{ width: "50%" }}>
        <Text text={productName} textStyle={{ marginVertical: 8 }} />
        <View style={{ width: "50%" }}>
          <Picker
            onValueChange={(itemValue) => {
              setSelectedMetric(itemValue);
            }}
            data={picker}
            value={currentMetric}
            placeholder={"0 Kgms"}
            disabled={false}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 12,
            justifyContent: "space-between",
          }}>
          <View style={CartItemStyles.priceTxt}>
            <Text
              text={" ₱" + productPrice}
              textStyle={CartItemStyles.currentPricetxt}
            />
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <Quantity />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
