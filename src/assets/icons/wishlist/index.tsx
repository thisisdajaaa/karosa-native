/**
 * Wishlist Icons
 *
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Cheese from "./category_cheese.svg";
import Coffee from "./category_coffee.svg";
import Fertilizer from "./category_fertilizer.svg";
import Flower from "./category_flower.svg";
import Fruit from "./category_fruits.svg";
import Grains from "./category_grains.svg";
import Meat from "./category_meat.svg";
import Root_Crops from "./category_root_crops.svg";
import Seedling from "./category_seedling.svg";
import Spices from "./category_spices.svg";
import Syrup from "./category_syrup.svg";
import Vegetables from "./category_vegetables.svg";
import GrayCircle from "./gray-circle.svg";
import GreenCircle from "./green-circle.svg";

const WishListIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    cheese: <Cheese style={extraStyle} height={height} width={width} />,
    coffee: <Coffee style={extraStyle} height={height} width={width} />,
    fertilizer: <Fertilizer style={extraStyle} height={height} width={width} />,
    flower: <Flower style={extraStyle} height={height} width={width} />,
    fruits: <Fruit style={extraStyle} height={height} width={width} />,
    grains: <Grains style={extraStyle} height={height} width={width} />,
    meat: <Meat style={extraStyle} height={height} width={width} />,
    root_crops: <Root_Crops style={extraStyle} height={height} width={width} />,
    seedling: <Seedling style={extraStyle} height={height} width={width} />,
    spices: <Spices style={extraStyle} height={height} width={width} />,
    syrup: <Syrup style={extraStyle} height={height} width={width} />,
    vegetables: <Vegetables style={extraStyle} height={height} width={width} />,
    grayCircle: <GrayCircle style={extraStyle} height={height} width={width} />,
    greenCircle: (
      <GreenCircle style={extraStyle} height={height} width={width} />
    ),
  };

  return icons[name];
};

export default WishListIcons;
