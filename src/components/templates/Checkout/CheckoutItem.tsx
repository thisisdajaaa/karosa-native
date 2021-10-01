import Icon from "@app/atoms/Icon";
import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";
import { OrderData } from "@app/redux/shop/models";
import Image from "@app/atoms/Image";
import FormCheckbox from "@app/molecules/FormCheckbox";
import FormPicker from "@app/molecules/FormPicker";

type Props = {
  item: OrderData;
  storeIndex: number;
};

const CheckoutItem: FC<Props> = (props) => {
  const { item, storeIndex } = props;

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
                <View style={{ flexDirection: "row" }}>
                  <Text
                    text={storeItem.selectedPickerLabel}
                    numberOfLines={2}
                    textStyle={{
                      ...theme.textRegular,
                      fontWeight: "400",
                      marginBottom: 8,
                      color: theme.colors.dark30,
                    }}
                  />
                  <Text
                    text={String(storeItem.quantity)}
                    numberOfLines={2}
                    textStyle={{
                      ...theme.textRegular,
                      fontWeight: "400",
                      marginBottom: 8,
                      color: theme.colors.dark30,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ListItem>
      ))}
    </>
  );
};

export default CheckoutItem;
