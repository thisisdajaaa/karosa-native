import { View } from "react-native";
import React from "react";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";
import ListChevron from "@app/components/organisms/ListChevron";
import { ListItem } from "react-native-elements";
import ExpandableText from "@app/components/molecules/ExpandableText";

const ProductInformation = () => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        padding: 14,
        marginTop: 12,
      }}
    >
      <Text
        text="Product Details"
        textStyle={{ ...theme.textSemiBold, marginBottom: 18 }}
      />

      <ListItem
        bottomDivider
        containerStyle={{
          paddingHorizontal: 0,
        }}
      >
        <ListItem.Content>
          <Text text="Stock" textStyle={{ ...theme.textRegular }} />
        </ListItem.Content>

        <Text
          text="50"
          textStyle={{ ...theme.textRegular, color: theme.colors.primary }}
        />
      </ListItem>

      <ListChevron
        onPress={() => alert("g")}
        chevronColor={theme.colors.primary}
        variation={1}
        containerStyle={{ paddingHorizontal: 0 }}
        info="Region's Best"
        infoStyle={{ ...theme.textRegular, color: theme.colors.primary }}
        title="Category"
        titleStyle={{ ...theme.textRegular }}
        hasBottomDivider
      />

      <ListItem
        bottomDivider
        containerStyle={{
          paddingHorizontal: 0,
        }}
      >
        <ListItem.Content>
          <Text text="Ships From" textStyle={{ ...theme.textRegular }} />
        </ListItem.Content>

        <Text
          text="Cebu, Visayas"
          textStyle={{ ...theme.textRegular, color: theme.colors.primary }}
        />
      </ListItem>

      <ListItem
        containerStyle={{
          paddingHorizontal: 0,
          paddingBottom: 0,
        }}
      >
        <ListItem.Content>
          <ExpandableText
            text="Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa  quae ab illo inventore veritatis. unde omnis iste natus error sit voluptatem accusa"
            readMoreStyle={{
              ...theme.textRegular,
              color: theme.colors.primary,
            }}
          />
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ProductInformation;
