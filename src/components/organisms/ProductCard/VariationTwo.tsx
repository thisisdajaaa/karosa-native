/**
 *
 * VariantTwo
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
import ProductCardStyles from "./styles";

const VariantTwo: FC<PropsType> = (props) => {
  const { name, image, rating, location, sold, currentPrice, discount } = props;

  return (
    <Card wrapperStyle={ProductCardStyles.mainContainer}>
      <View style={ProductCardStyles.wholesaleContainer}>
        <Text customStyle={ProductCardStyles.txtWholesale} text={"Wholesale"} />
      </View>

      {discount && (
        <View style={ProductCardStyles.ribbonContainer}>
          <Ribbon upperText={discount} lowerText="OFF" />
        </View>
      )}

      <Image
        source={{ uri: image }}
        customStyle={ProductCardStyles.image}
        resizeMode={"cover"}
      />
      <View style={ProductCardStyles.bottomContentContainer}>
        <Text
          customStyle={ProductCardStyles.txtName}
          numberOfLines={2}
          text={name}
        />
        <View style={ProductCardStyles.rowContainer}>
          <Text
            customStyle={ProductCardStyles.txtPrice}
            text={`P${currentPrice}`}
          />
          <View style={ProductCardStyles.prevPriceContainer}>
            <Text
              customStyle={ProductCardStyles.txtPrevPrice}
              text={`P${500}`}
            />
          </View>
        </View>
        <View style={ProductCardStyles.rowContainer}>
          <Rating
            ratingCount={5}
            readonly
            imageSize={15}
            startingValue={rating}
          />
          <View style={ProductCardStyles.floatRight}>
            <Text
              customStyle={ProductCardStyles.txtSold}
              text={`${sold} sold`}
            />
          </View>
        </View>
        <View style={ProductCardStyles.rowContainer}>
          <Text customStyle={ProductCardStyles.txtLocation} text={location!} />
          <View style={ProductCardStyles.floatRight}>
            <Icon group="common" name="outlineHeart" />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default VariantTwo;
