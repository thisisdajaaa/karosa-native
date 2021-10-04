import React, { FC } from "react";
import HomeTemplate from "@app/templates/Home";
import { PropsType as BannerSlideProps } from "@app/components/atoms/Banner/types";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";
import { Keyboard, TouchableOpacity } from "react-native";
import { theme } from "@app/styles";
import { Props as ScreenProps } from "@app/components/molecules/Base-Screen/types";
import { MaterialIcons } from "@expo/vector-icons";
import routes from "@app/navigators/routes";
import { useNavigation } from "@react-navigation/native";
import { HomeStyles as styles } from "../../components/templates/Home/styles";
const Home: FC = () => {
  const { goBack, navigate } = useNavigation();
  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        placement={"left"}
        containerStyle={{
          backgroundColor: theme.colors.transparent,
        }}
        // hasBottomDivider={true}
        centerComponent={
          <SearchBar
            placeholder={"Search in My Products"}
            backgroundColor={"primary"}
            onTouchStart={(_e) => navigate(routes.HOME_SEARCH)}
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
      name: "Banana",
    },
    { id: 2, name: "Kape" },
    {
      id: 3,
      name: "Gatas",
    },
    { id: 4, name: "Melon" },
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
