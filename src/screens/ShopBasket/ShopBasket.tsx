/**
 *
 * ShopBasket
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import BasketTemplate from "@app/components/templates/Basket";
import { PropsType as BasketItemProps } from "@app/molecules/BasketItems/types";
import { COMMON } from "src/constants";

const ShopBasket: FC<PropsType> = (props) => {
  const {} = props;

  const item1: BasketItemProps = {
    storeProps: {
      id: 1,
      checked: false,
      listChevronType: {
        title: "Store and Store",
        variation: COMMON.VARIATION.ONE,
        onPress: () => console.log("Pressed"),
      },
    },
    cartProps: [
      {
        id: 1,
        productImage:
          "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
        productName: "Tomato",
        productPrice: 100,
        checked: false,
        picker: [
          {
            label: "200 Kgms",
            value: 200,
          },
          {
            label: "500 Kgms",
            value: 500,
          },
          {
            label: "700 Kgms",
            value: 700,
          },
        ],
      },
      {
        id: 2,
        productImage:
          "https://1.bp.blogspot.com/-ZcEMiIcAprQ/VK_bL5uVN4I/AAAAAAAAnbU/TxNTIUHM7zs/s1600/indian%2Bmango%2Bin%2Biloilo%2B2.jpg",
        productName: "Indian Mango",
        productPrice: 10,
        checked: false,
        picker: [
          {
            label: "200 Kgms",
            value: 200,
          },
        ],
      },
    ],
  };
  const item2: BasketItemProps = {
    storeProps: {
      id: 2,
      checked: false,
      listChevronType: {
        title: "FarmVille",
        variation: COMMON.VARIATION.ONE,
        onPress: () => console.log("Pressed"),
      },
    },
    cartProps: [
      {
        id: 3,
        productImage:
          "https://cdn.britannica.com/s:800x1000/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
        productName: "Tomato",
        productPrice: 100,
        checked: false,
        picker: [
          {
            label: "200 Kgms",
            value: 200,
          },
        ],
      },
    ],
  };

  return <BasketTemplate basketItemProps={[item1, item2]} />;
};

export default ShopBasket;
