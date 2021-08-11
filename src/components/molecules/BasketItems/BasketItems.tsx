/**
 *
 * BasketItems
 * @format
 *
 */

import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import Delete from "@app/atoms/Delete";
import CartItem from "@app/components/organisms/CartItem";
import StoreBar from "@app/atoms/StoreBar";
import type { PropsType } from "./types";
import BasketItemsStyles from "./styles";

import { SwipeListView } from "react-native-swipe-list-view";

const BasketItems: FC<PropsType> = (props) => {
  const { storeProps, cartProps } = props;

  const [isChecked, setChecked] = useState(false);

  const [cartData, setCartData] = useState(cartProps);

  const [itemCount, setItemCount] = useState(0);

  const Count = () => {
    setItemCount(itemCount + 1);
  };
  // const handleDelete = (cartProp) => {
  //   cartProps.map((items, index) => {
  //     const newData = cartData.filter((c) => c.id !== items.id);
  //     setCartData(newData);
  //   });
  // };

  const onCheckChange = () => {
    var isAllChecked = true;
    cartData.forEach((cart) => {
      console.log(cart);
      if (!isAllChecked) {
        return;
      }
      if (!cart.checked) {
        isAllChecked = false;
      }
    });
    setChecked(isAllChecked);
  };

  // useEffect(() => {
  //   setChecked(!storeProps.checked);

  //   cartProps.forEach((cart) => {
  //     cart.checked = storeProps.checked;
  //   });
  // }, [storeProps.checked]);

  // useEffect(() => {
  //   var isAllChecked = true;
  //   console.log("asdasd");
  //   cartProps.forEach((cart) => {
  //     if (!isAllChecked) {
  //       return;
  //     }
  //     if (!cart.checked) {
  //       isAllChecked = false;
  //     }
  //   });
  //   storeProps.checked = isAllChecked;
  // }, [cartProps, cartData]);

  const onPress = () => {
    setChecked(!isChecked);

    cartProps.forEach((cart) => {
      cart.checked = isChecked;
    });
  };

  return (
    <View>
      <View style={BasketItemsStyles.gap}>
        <View style={BasketItemsStyles.storeNameBarStyle}>
          <StoreBar
            isChecked={isChecked}
            storeProps={storeProps.listChevronType}
            onPress={onPress}
          />
        </View>
        <SwipeListView
          contentContainerStyle={{
            backgroundColor: "#FFFACD",
            height: "100%",
            justifyContent: "center",
          }}
          data={cartData}
          renderItem={(data) => (
            <CartItem {...data.item} onCheckChange={onCheckChange} />
          )}
          renderHiddenItem={(data) => (
            <Delete
              onPress={() => {
                Count;
                const newData = cartData.filter((c) => c.id !== data.item.id);
                setCartData(newData);
                console.log(data.item);
                console.log(itemCount);
              }}
            />
          )}
          rightOpenValue={-96}
          disableRightSwipe={true}
          useFlatList={true}
        />
      </View>
    </View>
  );
};

export default BasketItems;
