/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useState } from "react";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import BasketItems from "@app/molecules/BasketItems";
import ListChevron from "@app/organisms/ListChevron";
import { CheckBox as RnCheckbox } from "react-native-elements";
import { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import Button from "@app/atoms/Button";
import { COLOR } from "./config";
import { COMMON } from "src/constants";
import Text from "@app/atoms/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import type { PropsType } from "./types";
import BasketStyles from "./styles";
import { View } from "react-native";
import { truncate } from "fs/promises";

const Basket: FC<PropsType> = (props) => {
  const [basketItemProps, setBasketItemProps] = useState(props.basketItemProps);

  const [isSelected, setSelection] = useState(false);

  const onPress = () => {
    setSelection(!isSelected);
    var newbasketItemProps : any[] = []
    basketItemProps.map((storeData) => {
      storeData.storeProps.checked = !isSelected
      newbasketItemProps.push(storeData)
    });
    console.log(newbasketItemProps)
    setBasketItemProps(newbasketItemProps);
  };

  const Checkbox = () => {
    return (
      <RnCheckbox
        title={"All"}
        checkedColor={COLOR}
        titleProps={{ style: BasketStyles.text }}
        containerStyle={BasketStyles.container}
        onPress={onPress}
        checked={isSelected}
      />
    );
  };

  const voucherProps: ListChevronProps = {
    title: "Karosa Voucher",
    variation: COMMON.VARIATION.ONE,
    info: "Select or Enter Code",
    onPress: () => console.log("20%"),
  };

  return (
    <View style={BasketStyles.generalStyle}>
      <View>
        <View style={BasketStyles.header}>
          <View style={BasketStyles.topBar}>
            <Header
              leftComponent={{
                icon: "arrow-back",
                color: theme.colors.primary,
              }}
              centerComponent={{
                text: "Shopping Cart",
                style: BasketStyles.labeltxt,
              }}
              rightComponent={{
                text: "Edit",
                onPress: () => console.log("Edit"),
              }}
            />
          </View>

          <View style={{ marginHorizontal: 8 }}>
            <MaterialCommunityIcons
              name="message-text"
              size={24}
              color="#0AA351"
            />
          </View>
        </View>
        <View>
          {basketItemProps.map((items, index) => {
            return <BasketItems key={index} {...items} />;
          })}
        </View>
      </View>
      <View>
        <View style={BasketStyles.voucherBar}>
          <View style={BasketStyles.buttonStyle}>
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={24}
              color="#0AA351"
            />
          </View>
          <View style={BasketStyles.chevronsize}>
            <ListChevron {...voucherProps} />
          </View>
        </View>

        <View style={BasketStyles.bottomContainer}>
          <View style={BasketStyles.bottomStyleLeft}>
            <Checkbox />
          </View>
          <View style={BasketStyles.bottomStyleRight}>
            <Text text={"Subtotal: "} />
            <Text text={" ₱789"} textStyle={BasketStyles.subtotaltxt} />
            <Button title={"Checkout"} buttonStyle={BasketStyles.buttonStyle} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Basket;
