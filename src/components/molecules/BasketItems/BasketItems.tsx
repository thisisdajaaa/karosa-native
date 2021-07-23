/**
 *
 * BasketItems
 * @format
 *
 */

import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { CheckBox as RnCheckbox } from "react-native-elements";
import ListChevron from "@app/organisms/ListChevron";
import CartItem from "@app/components/organisms/CartItem";
import { PropsType as CartItemProps } from "@app/components/organisms/CartItem/types";
import type { PropsType } from "./types";
import BasketItemsStyles from "./styles";
import { COLOR } from "./config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import Text from "@app/atoms/Text";

const BasketItems: FC<PropsType> = (props) => {
  const { storeProps, cartProps } = props;

  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(!storeProps.checked);

    cartProps.forEach((cart) => {
      cart.checked = storeProps.checked;
    });
  }, [storeProps.checked]);

  const onPress = () => {
    setChecked(!isChecked);

    cartProps.forEach((cart) => {
      cart.checked = isChecked;
    });
  };

  const StoreCheckbox = () => {
    return (
      <RnCheckbox
        checkedColor={COLOR}
        titleProps={{ style: BasketItemsStyles.text }}
        containerStyle={BasketItemsStyles.container}
        checked={isChecked}
        onPress={onPress}
      />
    );
  };

  // const [listData, setListData] = useState(
  //   cartProps.map((items, index) => ({
  //     key: `${index}`,
  //     productName: items.productName,
  //     productPrice: items.productPrice,
  //     productImage: items.productImage,
  //     checked: items.checked,
  //   }))
  // );

  return (
    <View>
      {/* <SwipeListView data={listData} /> */}
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
          <View style={BasketItemsStyles.edittxt}></View>
        </View>
        <SwipeListView data={cartProps} renderItem={(data) => (
          <CartItem {...data.item} />
        )} renderHiddenItem={(_ => (
          <View style={{ alignItems: "flex-end" }}>
            <MaterialCommunityIcons name="delete" size={28} color="#0AA351" />
            <Text textStyle={{ color: "#0AA351" }} text={"Delete"} />
          </View>
        ))} />
        {/* {cartProps.map((items, index) => {
          return <CartItem key={index} {...items} />;
        })} */}
      </View>
    </View>
  );
};

export default BasketItems;
