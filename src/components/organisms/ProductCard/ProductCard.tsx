/**
 *
 * ProductCard
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";

const ProductCard: FC<PropsType> = (props) => {
  const {
    name,
    variation,
    buttonTitle,
    onButtonClick,
    previousPrice,
    image,
    rating,
    location,
    sold,
    currentPrice,
    wholesale,
    discount,
    onPress,
    ratingImage,
    ratingType,
  } = props;

  switch (variation) {
    case 1:
      return (
        <VariationOne
          name={name}
          wholesale={wholesale}
          image={image}
          buttonTitle={buttonTitle}
          onButtonClick={onButtonClick}
          sold={sold}
          currentPrice={currentPrice}
          discount={discount}
          variation={variation}
          onPress={onPress}
        />
      );
    case 2:
      return (
        <VariationTwo
          wholesale={wholesale}
          name={name}
          image={image}
          rating={rating}
          location={location}
          sold={sold}
          currentPrice={currentPrice}
          previousPrice={previousPrice}
          discount={discount}
          variation={variation}
          onPress={onPress}
          ratingImage={ratingImage}
          ratingType={ratingType}
        />
      );
    case 3:
      return (
        <VariationThree
          name={name}
          image={image}
          wholesale={wholesale}
          location={location}
          sold={sold}
          currentPrice={currentPrice}
          discount={discount}
          variation={variation}
          onPress={onPress}
        />
      );
    default:
      return (
        <VariationOne
          name={name}
          image={image}
          buttonTitle={buttonTitle}
          onButtonClick={onButtonClick}
          sold={sold}
          currentPrice={currentPrice}
          discount={discount}
          variation={variation}
          onPress={onPress}
        />
      );
  }
};

export default ProductCard;
