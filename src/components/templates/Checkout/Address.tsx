import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { theme } from "@app/styles";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

const Address: FC = () => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gold15,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
      }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon group="checkout" name="location" height={24} width={24} />
        <Text
          text="Delivery Address"
          textStyle={{
            ...theme.textSemiBold,
            position: "relative",
            left: 10,
            fontWeight: "400",
          }}
        />

        <TouchableWithoutFeedback onPress={() => alert("Pressed")}>
          <View
            style={{
              marginLeft: "auto",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text
              text="Default"
              textStyle={{
                ...theme.textRegular,
                color: theme.colors.primary,
              }}
            />

            <Icon group="common" name="chevron" height={24} width={24} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          position: "relative",
          paddingLeft: 34,
          marginTop: 18,
        }}>
        <Text
          text="DAJA DAJA DAJA"
          textStyle={{
            ...theme.textRegular,
          }}
        />
        <Text
          text="(+63) 998 345 6432"
          textStyle={{
            ...theme.textRegular,
            color: theme.colors.dark30,
          }}
        />
        <Text
          text="St. Michael Drive V. Rama"
          textStyle={{
            ...theme.textRegular,
            color: theme.colors.dark30,
          }}
        />
        <Text
          text="Guadalupe, Cebu City"
          textStyle={{
            ...theme.textRegular,
            color: theme.colors.dark30,
          }}
        />
        <Text
          text="Visayas, Cebu, 6000"
          textStyle={{
            ...theme.textRegular,
            color: theme.colors.dark30,
          }}
        />
      </View>
    </View>
  );
};

export default Address;
