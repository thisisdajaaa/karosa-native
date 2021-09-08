/**
 *
 * VariantTwo
 * @format
 *
 */

import React, { FC, useState } from "react";
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

const VariantThree: FC<PropsType> = (props) => {
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
    onHeartClick,
    heartFlag,
  } = props;

  const [heartIcon, setHeartIcon] = useState(heartFlag);

  const toggleHeartIcon = () => {
    if (heartIcon) {
      setHeartIcon(false);
    } else {
      setHeartIcon(true);
    }
  };

  return (
    <Card containerStyle={ProductCardStyles.mainContainer}>
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
        resizeMode={"cover"}
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
          <View style={ProductCardStyles.prevPriceContainer}>
            <Text
              textStyle={ProductCardStyles.txtPrevPrice}
              text={`P${previousPrice}`}
            />
          </View>
        </View>
        <View style={ProductCardStyles.rowContainer}>
          <Rating
            ratingCount={RATING_COUNT}
            readonly
            imageSize={IMAGE_SIZE}
            startingValue={rating}
          />
          <View style={ProductCardStyles.floatRight}>
            <Text textStyle={ProductCardStyles.txtSold} text={`${sold} sold`} />
          </View>
        </View>
        <View style={ProductCardStyles.rowContainer}>
          <Text
            textStyle={ProductCardStyles.txtLocation}
            text={location ? location : ""}
          />
          <View
            style={ProductCardStyles.floatRight}
            onTouchStart={toggleHeartIcon}>
            <Icon
              group="common"
              name={heartIcon ? "redHeart" : "outlineHeart"}
              height={12}
              width={13}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default VariantThree;
