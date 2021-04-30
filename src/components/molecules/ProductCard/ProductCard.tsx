/**
 *
 * HomeCard
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { theme } from "@app/styles";

import type { HomeProps } from "./types";
import ProductCardStyles from "./styles";

const ProductCard: FC<HomeProps> = (props) => {
  const { item } = props;

  return (
    <Card
      containerStyle={{
        height: 220,
        width: 156,
        padding: 0,
        borderRadius: 3,
        shadowOpacity: 0.1,
        shadowOffset: { height: 4, width: 1 },
        shadowColor: theme.colors.black,
      }}>
      <View style={ProductCardStyles.wholesaleContainer}>
        <BaseText style={ProductCardStyles.txtWholesale}>Wholesale</BaseText>
      </View>
      <View style={ProductCardStyles.discount}>
        <View style={ProductCardStyles.discountContainer}>
          <BaseText style={ProductCardStyles.txtDiscount}>30%</BaseText>
          <View style={ProductCardStyles.space} />
          <BaseText style={ProductCardStyles.txtDiscount}>OFF</BaseText>
        </View>
        <View style={ProductCardStyles.triangleLeft} />
        <View style={ProductCardStyles.triangleRight} />
      </View>
      <Image
        source={require("../../../../assets/hinata.jpg")}
        style={ProductCardStyles.image}
        resizeMode={"cover"}
      />
      <View style={ProductCardStyles.mainTxtContainer}>
        <BaseText style={ProductCardStyles.txtName} numberOfLines={2}>
          {item.name}
        </BaseText>
        <View style={ProductCardStyles.txtContainer}>
          <BaseText style={ProductCardStyles.txtPrice}>P300</BaseText>
          <BaseText style={ProductCardStyles.txtSold}>50 sold</BaseText>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;
