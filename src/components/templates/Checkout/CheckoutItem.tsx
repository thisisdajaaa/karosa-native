import React, { FC, useRef } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { theme } from "@app/styles";
import { currencyFormatter } from "@app/utils";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import ListChevron from "@app/organisms/ListChevron";
import CheckoutDelivery from "@app/screens/CheckoutDelivery";

import type { CheckoutItemProps } from "./types";
import { ICON_SIZE, INITIAL_REDUCE, NUM_OF_LINES } from "./config";
import CheckoutStyles from "./styles";

const CheckoutItem: FC<CheckoutItemProps> = (props) => {
  const { item, storeIndex } = props;

  const checkoutDeliveryRef = useRef<RBSheet>(null);

  const orderTotal = item.items.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.price),
    INITIAL_REDUCE
  );

  const deliveryOption = () => {
    switch (item.deliveryOption) {
      case "1":
        return {
          label: "Lalamove",
          info: currencyFormatter("50", "₱"),
        };
      case "2":
        return {
          label: "Seller own Courier",
        };

      default:
        return {
          label: "Pick Up by Buyer",
          info: " ",
        };
    }
  };

  return (
    <>
      <ListItem>
        <ListItem.Content style={CheckoutStyles.storeNameContainer}>
          <Icon
            group="basket"
            name="store"
            height={ICON_SIZE}
            width={ICON_SIZE}
            extraStyle={CheckoutStyles.basketIcon}
          />
          <Text text={item.storeName} textStyle={CheckoutStyles.txtStoreName} />
        </ListItem.Content>
      </ListItem>

      {item.items.map((storeItem, storeKey) => (
        <ListItem
          key={storeItem.id}
          bottomDivider={storeKey === item.items.length - 1}>
          <View style={CheckoutStyles.storeItemColumn}>
            <View style={CheckoutStyles.storeItemRow}>
              <View style={CheckoutStyles.orderImageContainer}>
                <Image
                  source={{ uri: storeItem.image }}
                  imageStyle={CheckoutStyles.orderImage}
                  resizeMode="cover"
                />
              </View>
              <View style={CheckoutStyles.orderNameContainer}>
                <Text
                  text={storeItem.name}
                  numberOfLines={NUM_OF_LINES}
                  textStyle={CheckoutStyles.txtOrderName}
                />
                <View style={CheckoutStyles.pickerLabelContainer}>
                  <Text
                    text={`${storeItem.selectedPickerLabel}`}
                    numberOfLines={NUM_OF_LINES}
                    textStyle={CheckoutStyles.txtOrderItem}
                  />
                  <Text
                    text={`Qty: ${storeItem.quantity}`}
                    textStyle={CheckoutStyles.txtOrderItemQuantity}
                  />
                </View>

                <Text
                  text={currencyFormatter(String(storeItem.price), "₱")}
                  textStyle={CheckoutStyles.txtOrderPrice}
                />
              </View>
            </View>
          </View>
        </ListItem>
      ))}

      <ListChevron
        title={deliveryOption().label}
        onPress={() => checkoutDeliveryRef.current?.open()}
        variation={1}
        info={deliveryOption().info}
        infoStyle={{ ...theme.textRegular, color: theme.colors.dark20 }}
        titleStyle={{ ...theme.textRegular }}
        chevronColor={theme.colors.primary}
        icon={{
          group: "checkout",
          name: "delivery",
          height: ICON_SIZE,
          width: ICON_SIZE,
        }}
        hasBottomDivider
      />
      <ListItem style={CheckoutStyles.orderItemTotalContainer} bottomDivider>
        <ListItem.Content style={CheckoutStyles.orderItemTotalRow}>
          <Text
            text={`${item.items.length} ${
              item.items.length === 1 ? "item" : "items"
            }, Order Total: `}
            textStyle={CheckoutStyles.txtOrderItemTotal}
          />
          <Text
            text={currencyFormatter(String(orderTotal), "₱")}
            textStyle={CheckoutStyles.txtOrderItemTotalValue}
          />
        </ListItem.Content>
      </ListItem>

      <CheckoutDelivery
        sheetRef={checkoutDeliveryRef}
        storeIndex={storeIndex}
      />
    </>
  );
};

export default CheckoutItem;
