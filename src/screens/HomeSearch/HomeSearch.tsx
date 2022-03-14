/**
 *
 * HomeSearch
 * @format
 *
 */

import React, { FC } from "react";

import HomeSearchTemplate from "@app/components/templates/HomeSearch";
import { useNavigation } from "@react-navigation/native";

const HomeSearch: FC = () => {
  const { goBack } = useNavigation();
  const productData = [
    {
      id: 1,
      name: "Banana",
      categoryId: 1,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "500",
      dsctdPrice: "300",
      rating: 5,
      createdAt: "",
      updatedAt: "",
      discount: 30,
      stocks: 20,
      latestFlag: "1",
      heartFlag: true,
    },
    {
      id: 2,
      name: "Apple",
      categoryId: 1,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "400",
      dsctdPrice: "200",
      rating: 4,
      createdAt: "",
      updatedAt: "",
      discount: 10,
      stocks: 0,
      latestFlag: "0",
      heartFlag: true,
    },
    {
      id: 3,
      name: "Mango",
      categoryId: 1,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "100",
      dsctdPrice: "50",
      rating: 4,
      createdAt: "",
      updatedAt: "",
      discount: 50,
      stocks: 0,
      latestFlag: "1",
      heartFlag: true,
    },
    {
      id: 4,
      name: "Okra",
      categoryId: 2,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "200",
      dsctdPrice: "150",
      rating: 3,
      createdAt: "",
      updatedAt: "",
      discount: 30,
      stocks: 0,
      latestFlag: "0",
      heartFlag: true,
    },
    {
      id: 5,
      name: "Kape Barako",
      categoryId: 3,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "200",
      dsctdPrice: "150",
      rating: 3,
      createdAt: "",
      updatedAt: "",
      discount: 5,
      stocks: 0,
      latestFlag: "0",
      heartFlag: true,
    },
    {
      id: 6,
      name: "Pears",
      categoryId: 4,
      description: "mock description",
      shopId: 2,
      orgnlPrice: "200",
      dsctdPrice: "150",
      rating: 3,
      createdAt: "",
      updatedAt: "",
      discount: 10,
      stocks: 1,
      latestFlag: "1",
      heartFlag: true,
    },
  ];

  return <HomeSearchTemplate productProps={productData} handleBack={goBack} />;
};

export default HomeSearch;
