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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartItem: FC<PropsType> = (props) => {
  const { productImage, productName, productPrice, checked } = props;
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(!checked);
  }, [checked]);

  const onPress = () => {
    setChecked(!isChecked);
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
      <View>
        <Text text={productName} textStyle={{ marginVertical: 8 }} />
        <View style={CartItemStyles.priceTxt}>
          <Text
            text={" ₱" + productPrice}
            textStyle={CartItemStyles.currentPricetxt}
          />
        </View>
        <Quantity />
      </View>
      <View
        style={{
          width: 96,
          backgroundColor: "#FFFACD",
          height: "100%",
          justifyContent: "center",
        }}>
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="delete" size={28} color="#0AA351" />
          <Text textStyle={{ color: "#0AA351" }} text={"Delete"} />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
