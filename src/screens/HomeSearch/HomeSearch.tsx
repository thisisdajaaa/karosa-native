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
      name: "Banana Product two line",
    },
    { id: 2, name: "Banana Product two line " },
    {
      id: 3,
      name: "Banana Product two line",
    },
    { id: 4, name: "Banana Product two line " },
    { id: 5, name: "Banana Product two line " },
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
            placeholder={"What are you looking for?"}
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
