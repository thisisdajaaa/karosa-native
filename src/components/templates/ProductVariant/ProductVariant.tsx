/**
 *
 * ProductVariant
 * @format
 *
 */

import React, { FC, useState } from "react";
import { View } from "react-native";
import { noop } from "lodash";
import Text from "@app/atoms/Text";
import Divider from "@app/atoms/Divider";
import Chip from "@app/atoms/Chip";
import Image from "@app/atoms/Image";
import Quantity from "@app/atoms/Quantity";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import { DUMMY_TOTAL_COUNT, DUMMY_UNITS, DUMMY_VARIANTS } from "./config";
import ProductVariantStyles from "./styles";
import VariantImage from "./VariantImage";

const ProductVariantTemplate: FC<PropsType> = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    DUMMY_VARIANTS[0]
  );
  const [selectedUnit, setSelectedUnit] = useState<string | null>(
    DUMMY_UNITS[0]
  );

  return (
    <>
      <Text text="Select Variant" textStyle={ProductVariantStyles.title} />
      <View style={ProductVariantStyles.spacer} />

      <View style={ProductVariantStyles.content}>
        <View style={ProductVariantStyles.imageContainer}>
          {DUMMY_VARIANTS.map((item, index) => (
            <VariantImage
              key={index}
              selected={selectedVariant === item}
              onPress={() => setSelectedVariant(item)}
              item={item}
            />
          ))}
        </View>

        <Divider />

        <View style={ProductVariantStyles.unitsContainer}>
          {DUMMY_UNITS.map((item, index) => (
            <Chip
              key={index}
              selected={selectedUnit === item}
              title={item}
              onPress={() => setSelectedUnit(item)}
            />
          ))}
        </View>

        <Divider />

        <View style={ProductVariantStyles.quantityContainer}>
          <Text text="Quantity" textStyle={ProductVariantStyles.txtQuantity} />

          <Text
            text="49 pieces left"
            textStyle={ProductVariantStyles.txtQuantityValue}
          />

          <View style={ProductVariantStyles.quantityContent}>
            <Quantity
              value={String(quantity)}
              onIncrement={() => setQuantity((prev) => prev + 1)}
              onDecrement={() => setQuantity((prev) => prev - 1)}
              disableDecrement={quantity === 0}
              disableIncrement={quantity >= DUMMY_TOTAL_COUNT}
            />
          </View>
        </View>

        <View style={ProductVariantStyles.selectedItem}>
          <Image
            imageStyle={ProductVariantStyles.image}
            source={{
              uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
            }}
          />

          <View style={ProductVariantStyles.priceContainer}>
            <Text text="P500.00" textStyle={ProductVariantStyles.txtPrice} />

            <Text
              text="P800.00"
              textStyle={ProductVariantStyles.txtPrevPrice}
            />

            <Text
              text={`${selectedVariant}, ${selectedUnit}`}
              textStyle={ProductVariantStyles.txtSelected}
            />
          </View>
        </View>

        <View style={ProductVariantStyles.buttonsContainer}>
          <Button
            title="Add to Basket"
            onPress={noop}
            buttonStyle={ProductVariantStyles.btnAddBasket}
            titleStyle={ProductVariantStyles.txtAddBasket}
          />

          <Button
            title="Buy Now"
            onPress={noop}
            buttonStyle={ProductVariantStyles.btnBuy}
            titleStyle={ProductVariantStyles.txtBuy}
          />
        </View>
      </View>
    </>
  );
};

export default ProductVariantTemplate;
