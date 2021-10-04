/**
 *
 * HomeSearch
 * @format
 *
 */

import React, { FC } from "react";

// import HomeSearchConfig from "./config";
import type { PropsType } from "./types";
// import HomeSearchStyles from "./styles";
import { Props as ScreenProps } from "@app/components/molecules/Base-Screen/types";
// import { useNavigation } from "@react-navigation/native";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";
import { Keyboard, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@app/styles";
import styles from "../../components/templates/HomeSearchTemplate/styles";
import HomeSearchTemplate from "@app/components/templates/HomeSearchTemplate/HomeSearchTemplate";
import { useNavigation } from "@react-navigation/native";
const HomeSearch: FC<PropsType> = (props) => {
  const {} = props;

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
  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        placement={"left"}
        containerStyle={{
          backgroundColor: "transparent",
          width: "100%",
        }}
        hasBottomDivider={true}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={
          <SearchBar
            placeholder={"Test item"}
            backgroundColor={"primary"}
            onFocus={Keyboard.dismiss}
          />
        }
        rightComponent={
          <TouchableOpacity onPress={() => console.log("messages")}>
            <MaterialIcons name="chat" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />
    ),
    subCustomStyles: styles.searchBarContainer,
  };

  return (
    <HomeSearchTemplate screenProps={screenProps} productProps={productData} />
  );
};

export default HomeSearch;
