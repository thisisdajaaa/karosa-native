/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import Ribbon from "@app/atoms/Ribbon";
import Card from "@app/molecules/Card";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ProductCardStyles from "./styles";

const VariationThree: FC<PropsType> = (props) => {
  const { name, wholesale, image, location, sold, currentPrice, discount } =
    props;

  return (
    <Card containerStyle={ProductCardStyles.variationThreeCard}>
      {wholesale && (
        <View style={ProductCardStyles.wholesaleContainer}>
          <Text textStyle={ProductCardStyles.txtWholesale} text={"Wholesale"} />
        </View>
      )}

      {discount && (
        <View style={ProductCardStyles.ribbonContainer}>
          <Ribbon upperText={`${discount}%`} lowerText="OFF" />
        </View>
      )}

      <Image
        source={{ uri: image }}
        imageStyle={ProductCardStyles.image}
        resizeMode="cover"
      />

      <View style={ProductCardStyles.bottomContentContainer}>
        <Text
          textStyle={ProductCardStyles.txtVariationThreeName}
          numberOfLines={NUM_LINES}
          text={name}
        />
        <View style={ProductCardStyles.rowContainer}>
          <Text
            textStyle={ProductCardStyles.txtVariationThreePrice}
            text={`P${currentPrice}`}
          />

          {sold && (
            <View style={ProductCardStyles.floatRight}>
              <Text
                textStyle={ProductCardStyles.txtSold}
                text={`${sold} sold`}
              />
            </View>
          )}

          {location && (
            <View style={ProductCardStyles.floatRight}>
              <Text
                textStyle={ProductCardStyles.txtLocation}
                text={location ?? ""}
              />
            </View>
          )}
        </View>
      </View>
    </Card>
  );
};

export default VariationThree;
