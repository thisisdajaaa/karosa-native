import Icon from "@app/atoms/Icon";
import React, { FC, Fragment, useRef } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";
import { OrderData } from "@app/redux/shop/models";
import Image from "@app/atoms/Image";
import ListChevron from "@app/components/organisms/ListChevron";
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutDelivery from "@app/screens/CheckoutDelivery";

type Props = {
  item: OrderData;
  storeIndex: number;
};

const CheckoutItem: FC<Props> = (props) => {
  const { item, storeIndex } = props;

  const checkoutDeliveryRef = useRef<RBSheet>(null);

  const orderTotal = item.items.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.price),
    0
  );

  return (
    <>
      <ListItem>
        <ListItem.Content
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          <Icon
            group="basket"
            name="store"
            height={24}
            width={24}
            extraStyle={{ marginHorizontal: 8 }}
          />
          <Text
            text={item.storeName}
            textStyle={{ ...theme.textSemiBold, fontWeight: "500" }}
          />
        </ListItem.Content>
      </ListItem>

      {item.items.map((storeItem, storeKey) => (
        <ListItem
          key={storeItem.id}
          bottomDivider={storeKey === item.items.length - 1}>
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View style={{ marginLeft: 24 }}>
                <Image
                  source={{ uri: storeItem.image }}
                  imageStyle={{ height: 75, width: 75 }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "column",
                  width: "60%",
                }}>
                <Text
                  text={storeItem.name}
                  numberOfLines={2}
                  textStyle={{
                    ...theme.textRegular,
                    fontWeight: "400",
                    marginBottom: 8,
                  }}
                />
                <View style={{ flexDirection: "row", marginBottom: 8 }}>
                  <Text
                    text={`${storeItem.selectedPickerLabel},`}
                    numberOfLines={2}
                    textStyle={{
                      ...theme.textRegular,
                      fontWeight: "400",
                      color: theme.colors.dark30,
                    }}
                  />
                  <Text
                    text={`Quantity: `}
                    textStyle={{
                      ...theme.textRegular,
                      fontWeight: "400",
                      marginLeft: 8,
                      color: theme.colors.dark30,
                    }}
                  />
                  <Text
                    text={String(storeItem.quantity)}
                    textStyle={{
                      ...theme.textSemiBold,
                      fontWeight: "400",
                      color: theme.colors.dark30,
                    }}
                  />
                </View>

                <Text
                  text={`P${storeItem.price}`}
                  textStyle={{
                    ...theme.textSemiBold,
                    color: theme.colors.primary,
                  }}
                />
              </View>
            </View>
          </View>
        </ListItem>
      ))}

      <ListChevron
        title="Standard Express"
        onPress={() => checkoutDeliveryRef.current?.open()}
        variation={1}
        info="Select / Code"
        subtitle="Via Lalamove"
        infoStyle={{ ...theme.textRegular, color: theme.colors.dark20 }}
        titleStyle={{ ...theme.textRegular }}
        chevronColor={theme.colors.primary}
        icon={{
          group: "checkout",
          name: "delivery",
          height: 24,
          width: 24,
        }}
        hasBottomDivider
      />
      <ListItem style={{ marginBottom: 12 }} bottomDivider>
        <ListItem.Content
          style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text
            text={`${item.items.length} items, Order Total: `}
            textStyle={{
              ...theme.textRegular,
              fontWeight: "400",
              marginLeft: 8,
            }}
          />
          <Text
            text={`PHP ${orderTotal}`}
            textStyle={{
              ...theme.textSemiBold,
              color: theme.colors.primary,
            }}
          />
        </ListItem.Content>
      </ListItem>

      <CheckoutDelivery sheetRef={checkoutDeliveryRef} />
    </>
  );
};

export default CheckoutItem;
