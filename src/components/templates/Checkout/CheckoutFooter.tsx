import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { theme } from "@app/styles";
import Chip from "@app/atoms/Chip";

import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";

const CheckoutFooter: FC = () => {
  return (
    <>
      <ListItem>
        <ListItem.Content>
          <Text text="Select Payment Method" />
        </ListItem.Content>
        <View style={{ left: 12 }}>
          <Text text="See All" textStyle={{ color: theme.colors.primary }} />
        </View>
        <ListItem.Chevron iconStyle={{ color: theme.colors.primary }} />
      </ListItem>
      <ListItem style={{ top: -5, marginBottom: 12 }} bottomDivider>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Chip
            selected={true}
            title="Cash on Delivery"
            iconGroup="checkout"
            iconName="coins"
          />
          <Chip
            selected={false}
            title="GCash"
            iconGroup="basket"
            iconName="store"
          />
        </ScrollView>
      </ListItem>
      <ListItem
        bottomDivider
        style={{ marginBottom: 12 }}
        containerStyle={{
          flexDirection: "column",
          alignItems: "stretch",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}>
          <Text text="Sub-Total (3 items)" />
          <Text text="PHP 2700" textStyle={{ ...theme.textSemiBold }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}>
          <Text text="Shipping Fee" />
          <Text text="PHP 100" textStyle={{ ...theme.textSemiBold }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text text="Total Payment" />
          <Text text="PHP 2800" textStyle={{ ...theme.textSemiBold }} />
        </View>
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={{ height: 64, justifyContent: "flex-end" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            text="Total:"
            textStyle={{
              ...theme.textRegular,
              fontWeight: "700",
              textAlign: "right",
            }}
          />
          <Text
            text={`P 1231`}
            textStyle={{
              ...theme.textSemiBold,
              color: theme.colors.primary,
              textAlign: "right",
            }}
          />
        </View>
        <Button
          title="Place Order"
          onPress={() => 0}
          buttonStyle={{ paddingVertical: 16, paddingHorizontal: 48 }}
          titleStyle={{ ...theme.textLightBold }}
        />
      </ListItem>
    </>
  );
};

export default CheckoutFooter;
