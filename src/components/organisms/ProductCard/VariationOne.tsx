/**
 *
 * VariantOne
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import Card from "@app/molecules/Card";
import Ribbon from "@app/atoms/Ribbon";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ProductCardStyles from "./styles";

const VariantOne: FC<PropsType> = (props) => {
  const {
    name,
    image,
    buttonTitle,
    onButtonClick,
    sold,
    currentPrice,
    discount,
    wholesale,
  } = props;

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
          <View style={ProductCardStyles.floatRight}>
            <Text textStyle={ProductCardStyles.txtSold} text={`${sold} sold`} />
          </View>
        </View>
      </View>
      <View style={ProductCardStyles.buttonContainer}>
        <Button
          type="outline"
          title={buttonTitle ? buttonTitle : ""}
          buttonStyle={ProductCardStyles.buttonContent}
          titleStyle={ProductCardStyles.txtButton}
          onPress={onButtonClick ? onButtonClick : () => 0}
        />
      </View>
    </Card>
  );
};

export default VariantOne;
