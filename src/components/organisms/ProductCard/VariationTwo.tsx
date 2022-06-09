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
import Rating from "@app/atoms/Rating";
import Icon from "@app/atoms/Icon";
import Ribbon from "@app/atoms/Ribbon";
import Card from "@app/molecules/Card";

import type { PropsType } from "./types";
import { IMAGE_SIZE, NUM_LINES, RATING_COUNT } from "./config";
import ProductCardStyles from "./styles";

const VariationTwo: FC<PropsType> = (props) => {
  const {
    name,
    wholesale,
    image,
    rating,
    location,
    sold,
    currentPrice,
    discount,
    previousPrice,
    onPress,
    ratingImage,
    ratingType,
  } = props;

  return (
    <Card containerStyle={ProductCardStyles.mainContainer} onPress={onPress}>
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
          textStyle={ProductCardStyles.txtName}
          numberOfLines={NUM_LINES}
          text={name}
        />
        <View style={ProductCardStyles.rowContainer}>
          <Text
            textStyle={ProductCardStyles.txtPrice}
            text={`P${currentPrice}`}
          />

          {previousPrice && (
            <View style={ProductCardStyles.prevPriceContainer}>
              <Text
                textStyle={ProductCardStyles.txtPrevPrice}
                text={`P${previousPrice}`}
              />
            </View>
          )}
        </View>
        <View style={ProductCardStyles.rowContainer}>
          <Rating
            ratingCount={RATING_COUNT}
            readonly
            imageSize={IMAGE_SIZE}
            startingValue={rating}
            ratingImage={ratingImage}
            type={ratingType}
          />
          <View style={ProductCardStyles.floatRight}>
            <Text textStyle={ProductCardStyles.txtSold} text={`${sold} sold`} />
          </View>
        </View>
        <View style={ProductCardStyles.lastRowContainer}>
          <Text
            textStyle={ProductCardStyles.txtLocation}
            text={location ? location : ""}
          />
          <View style={ProductCardStyles.floatRight}>
            <Icon group="common" name="outlineHeart" height={12} width={13} />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default VariationTwo;
