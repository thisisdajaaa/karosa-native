import React, { FC } from "react";
import HomeTemplate from "@app/templates/Home";
import { PropsType as BannerSlideProps } from "@app/components/atoms/Banner/types";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";
import { Keyboard, TouchableOpacity } from "react-native";
import { theme } from "@app/styles";
import { Props as ScreenProps } from "@app/components/molecules/Base-Screen/types";
import { MaterialIcons } from "@expo/vector-icons";

const Home: FC = () => {
  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        placement={"left"}
        containerStyle={{
          backgroundColor: "transparent",
          width: "100%",
        }}
        centerComponent={
          <SearchBar
            placeholder={"Search in My Products"}
            backgroundColor={"primary"}
            // onTouchStart={(_e) => navigate(routes.SEARCH_PRODUCT)}
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
    // subCustomStyles: styles.searchBarContainer,
  };
  const bannerProps: BannerSlideProps = {
    carouselData: [
      {
        source: "https://picsum.photos/200/300",
      },
      {
        source: "https://picsum.photos/200/300",
      },
      {
        source: "https://picsum.photos/200/300",
      },
    ],
  };

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
  ];
  return (
    <HomeTemplate
      bannerProps={bannerProps}
      screenProps={screenProps}
      productProps={productData}
    />
  );
};

export default Home;
