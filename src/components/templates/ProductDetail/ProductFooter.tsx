import { View } from "react-native";
import React from "react";
import { ListItem } from "react-native-elements";
import Button from "@app/atoms/Button";
import { theme } from "@app/styles";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

const ProductFooter = () => {
  return (
    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <ListItem
        containerStyle={{
          justifyContent: "flex-end",
          flexDirection: "row",
          paddingBottom: 22,
        }}
      >
        <View style={{ marginRight: "auto", paddingLeft: 14 }}>
          <Icon
            name="chatNow"
            group="products"
            height={20}
            width={20}
            extraStyle={{ marginLeft: "8%" }}
          />
          <Text
            text="Chat"
            textStyle={{ ...theme.textLight, color: theme.colors.dark30 }}
          />
        </View>

        <Button
          title="Add to Basket"
          onPress={() => alert("g")}
          buttonStyle={{
            paddingVertical: 24,
            paddingHorizontal: 64,
            backgroundColor: theme.colors.light10,
          }}
          titleStyle={{
            ...theme.textLightBold,
            color: theme.colors.black,
            position: "absolute",
          }}
        />
        <Button
          title="Buy Now"
          onPress={() => alert("g")}
          buttonStyle={{ paddingVertical: 24, paddingHorizontal: 64 }}
          titleStyle={{
            ...theme.textLightBold,
            position: "absolute",
          }}
        />
      </ListItem>
    </View>
  );
};

export default ProductFooter;
