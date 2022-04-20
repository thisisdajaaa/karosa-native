import { View } from "react-native";
import React from "react";
import ListChevron from "@app/organisms/ListChevron";
import { theme } from "@app/styles";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import ImageOverlayReviews from "@app/organisms/ImageOverlayReviews";
import { noop } from "lodash";

const ProductActions = () => {
  return (
    <View>
      <ListChevron
        onPress={noop}
        chevronColor={theme.colors.primary}
        icon={{
          group: "products",
          name: "grayDelivery",
          height: 22,
          width: 22,
        }}
        variation={1}
        subtitle="Cost: P50"
        title="Delivery from Cebu City"
        hasBottomDivider
      />

      <View style={{ marginVertical: 6 }} />

      <ListChevron
        onPress={noop}
        chevronColor={theme.colors.primary}
        variation={1}
        info="30% OFF"
        infoStyle={{
          ...theme.textRegular,
          color: theme.colors.primary,
        }}
        hasBottomDivider
        title="Shop Vouchers"
        titleStyle={{ ...theme.textSemiBold }}
      />

      <ListItem
        onPress={noop}
        containerStyle={{ flexDirection: "column", alignItems: "stretch" }}
        bottomDivider
      >
        <ListItem.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text text="Variations" textStyle={{ ...theme.textSemiBold }} />
          <ListItem.Chevron iconStyle={{ color: theme.colors.primary }} />
        </ListItem.Content>
        <ListItem.Content
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            paddingTop: 14,
            paddingBottom: 4,
          }}
        >
          <ImageOverlayReviews
            overlayProps={[
              {
                source: {
                  uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
                },
                hasOverlay: false,
              },
              {
                source: {
                  uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
                },
                hasOverlay: false,
              },
              {
                source: {
                  uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
                },
                hasOverlay: false,
              },
              {
                source: {
                  uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
                },
                textContent: "+5",
              },
            ]}
          />
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ProductActions;
