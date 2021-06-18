/**
 *
 * BasketItems
 * @format
 *
 */

import React, { FC, useState } from "react";
import { View } from "react-native";
import { CheckBox as RnCheckbox } from "react-native-elements";
import Text from "@app/atoms/Text";
import ListChevron from "@app/organisms/ListChevron";
import CartItem from "@app/components/organisms/CartItem";
import type { PropsType } from "./types";
import BasketItemsStyles from "./styles";
import { COLOR } from "./config";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BasketItems: FC<PropsType> = (props) => {
  const { storeProps, cartProps } = props;

  const [isChecked, setChecked] = useState(storeProps.checked);

  const onPress = () => {
    setChecked(!isChecked);
  };

  const StoreCheckbox = () => {
    return (
      <RnCheckbox
        checkedColor={COLOR}
        titleProps={{ style: BasketItemsStyles.text }}
        containerStyle={BasketItemsStyles.container}
        checked={storeProps.checked}
        onPress={onPress}
      />
    );
  };

  return (
    <View style={BasketItemsStyles.gap}>
      <View style={BasketItemsStyles.storeNameBarStyle}>
        <View style={BasketItemsStyles.chevronStyle}>
          <StoreCheckbox />
          <MaterialCommunityIcons
            name="storefront-outline"
            size={24}
            color="black"
          />
          <View>
            <ListChevron {...storeProps.listChevronType} />
          </View>
        </View>
        <View style={BasketItemsStyles.edittxt}>
          <Text text={"Edit"} />
        </View>
      </View>
      {cartProps.map((items, index) => {
        return <CartItem key={index} {...items} />;
      })}
    </View>
  );
};

export default BasketItems;
