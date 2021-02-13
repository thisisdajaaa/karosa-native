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
  } = props;

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
          numberOfLines={NUM_LINES}
          text={name}
        />
        <View style={ProductCardStyles.rowContainer}>
          <Text
            customStyle={ProductCardStyles.txtPrice}
            text={`P${currentPrice}`}
          />
          <View style={ProductCardStyles.floatRight}>
            <Text
              customStyle={ProductCardStyles.txtSold}
              text={`${sold} sold`}
            />
          </View>
        </View>
      </View>
      <View style={ProductCardStyles.buttonContainer}>
        <Button
          type="outline"
          title={buttonTitle ? buttonTitle : ""}
          customStyle={ProductCardStyles.buttonContent}
          titleStyle={ProductCardStyles.txtButton}
          onPress={onButtonClick ? onButtonClick : () => 0}
        />
      </View>
    </Card>
  );
};

export default VariantOne;
