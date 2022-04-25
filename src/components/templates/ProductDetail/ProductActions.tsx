/**
 *
 * ProductActions
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { noop } from "lodash";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { COMMON } from "@app/constants";
import ListChevron from "@app/organisms/ListChevron";
import Text from "@app/atoms/Text";
import ImageOverlayReviews from "@app/organisms/ImageOverlayReviews";

import type { ProductActionProps } from "./types";
import { ProductActionStyles } from "./styles";

const ProductActions: FC<ProductActionProps> = (props) => {
  const { onVariations } = props;

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
        variation={COMMON.VARIATION.ONE}
        subtitle="Cost: P50"
        title="Delivery from Cebu City"
        hasBottomDivider
      />

      <View style={ProductActionStyles.spacer} />

      <ListChevron
        onPress={noop}
        chevronColor={theme.colors.primary}
        variation={COMMON.VARIATION.ONE}
        info="30% OFF"
        infoStyle={ProductActionStyles.discountInfo}
        hasBottomDivider
        title="Shop Vouchers"
        titleStyle={ProductActionStyles.txtSemiBold}
      />

      <ListItem
        onPress={onVariations}
        containerStyle={ProductActionStyles.variationContainer}
        bottomDivider
      >
        <ListItem.Content style={ProductActionStyles.txtVariationContainer}>
          <Text text="Variations" textStyle={ProductActionStyles.txtSemiBold} />
          <ListItem.Chevron iconStyle={ProductActionStyles.chevron} />
        </ListItem.Content>
        <ListItem.Content style={ProductActionStyles.overlayContainer}>
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
