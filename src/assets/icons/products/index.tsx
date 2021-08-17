/**
 * ProductsIcon
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Add from "./add.svg";
import AddImage from "./add-image.svg";
import Alert from "./alert.svg";
import Block from "./block.svg";
import ChevronDown from "./chevron-down.svg";
import Coupon from "./coupon.svg";
import Edit from "./edit.svg";
import ListBullet from "./list-bullet.svg";
import ListGrid from "./list-grid.svg";
import Remove from "./remove.svg";
import Share from "./share.svg";
import Sort from "./sort.svg";
import Warning from "./warning.svg";
<<<<<<< HEAD
import Harvest from "./harvest.svg";
import Price from "./price.svg";
import Stock from "./stocks.svg";
import ShelfLife from "./shelf-life.svg";
import Status from "./status.svg";
import Availability from "./availability.svg";
import Variation from "./variation.svg";
import Wholesale from "./wholesale.svg";
import PreOrder from "./pre-order.svg";
import ShippingDetails from "./shipping-details.svg";
import AddVariation from "./add-variation.svg";
import DeleteVariation from "./delete-variation.svg";
import CategoryCoffee from "./category-coffee.svg";
import CategoryDairy from "./category-dairy.svg";
import CategoryFeeds from "./category-feeds.svg";
import CategoryFruits from "./category-fruits.svg";
import CategoryGrains from "./category-grains.svg";
import CategoryHerbs from "./category-herbs.svg";
import CategoryMeats from "./category-meats.svg";
import CategoryPlants from "./category-plants.svg";
import CategoryRoots from "./category-roots.svg";
import CategorySeeds from "./category-seeds.svg";
import CategorySyrups from "./category-syrups.svg";
import CategoryVegetables from "./category-vegetables.svg";
import EstimateDate from "./estimate-date.svg";
import Shipping from "./shipping.svg";
import ChatNow from "./chatNow.svg";
=======
import Shipping from "./shipping.svg";
>>>>>>> 321f537... refactor(rebase): rebase

const ProductsIcon = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    estimateDate: (
      <EstimateDate style={extraStyle} height={height} width={width} />
    ),
    categoryCoffee: (
      <CategoryCoffee style={extraStyle} height={height} width={width} />
    ),
    categoryDairy: (
      <CategoryDairy style={extraStyle} height={height} width={width} />
    ),
    categoryFeeds: (
      <CategoryFeeds style={extraStyle} height={height} width={width} />
    ),
    categoryFruits: (
      <CategoryFruits style={extraStyle} height={height} width={width} />
    ),
    categoryGrains: (
      <CategoryGrains style={extraStyle} height={height} width={width} />
    ),
    categoryHerbs: (
      <CategoryHerbs style={extraStyle} height={height} width={width} />
    ),
    categoryMeats: (
      <CategoryMeats style={extraStyle} height={height} width={width} />
    ),
    categoryPlants: (
      <CategoryPlants style={extraStyle} height={height} width={width} />
    ),
    categoryRoots: (
      <CategoryRoots style={extraStyle} height={height} width={width} />
    ),
    categorySeeds: (
      <CategorySeeds style={extraStyle} height={height} width={width} />
    ),
    categorySyrups: (
      <CategorySyrups style={extraStyle} height={height} width={width} />
    ),
    categoryVegetables: (
      <CategoryVegetables style={extraStyle} height={height} width={width} />
    ),
    add: <Add style={extraStyle} height={height} width={width} />,
    addImage: <AddImage style={extraStyle} height={height} width={width} />,
    deleteVariation: (
      <DeleteVariation style={extraStyle} height={height} width={width} />
    ),
    shippingDetails: (
      <ShippingDetails style={extraStyle} height={height} width={width} />
    ),
    preOrder: <PreOrder style={extraStyle} height={height} width={width} />,
    addVariation: (
      <AddVariation style={extraStyle} height={height} width={width} />
    ),
    wholesale: <Wholesale style={extraStyle} height={height} width={width} />,
    availability: (
      <Availability style={extraStyle} height={height} width={width} />
    ),
    variation: <Variation style={extraStyle} height={height} width={width} />,
    status: <Status style={extraStyle} height={height} width={width} />,
    shelfLife: <ShelfLife style={extraStyle} height={height} width={width} />,
    stock: <Stock style={extraStyle} height={height} width={width} />,
    price: <Price style={extraStyle} height={height} width={width} />,
    harvest: <Harvest style={extraStyle} height={height} width={width} />,
    alert: <Alert style={extraStyle} height={height} width={width} />,
    block: <Block style={extraStyle} height={height} width={width} />,
    chevronDown: (
      <ChevronDown style={extraStyle} height={height} width={width} />
    ),
    coupon: <Coupon style={extraStyle} height={height} width={width} />,
    edit: <Edit style={extraStyle} height={height} width={width} />,
    listBullet: <ListBullet style={extraStyle} height={height} width={width} />,
    listGrid: <ListGrid style={extraStyle} height={height} width={width} />,
    remove: <Remove style={extraStyle} height={height} width={width} />,
    share: <Share style={extraStyle} height={height} width={width} />,
    sort: <Sort style={extraStyle} height={height} width={width} />,
    warning: <Warning style={extraStyle} height={height} width={width} />,
    shipping: <Shipping style={extraStyle} height={height} width={width} />,
<<<<<<< HEAD
    chatNow: <ChatNow style={extraStyle} height={height} width={width} />,
=======
>>>>>>> 321f537... refactor(rebase): rebase
  };

  return icons[name];
};

export default ProductsIcon;
