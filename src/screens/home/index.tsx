import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { theme } from "@app/styles";
import { Header } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "@app/components/search-bar";
import { BaseText } from "@app/components/base-text";
import { Trends } from "@app/components/cards/trends";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { BannerSlide } from "@app/components/banner";
import { Props as BannerSlideProps } from "@app/components/banner/types";
import routes from "@app/navigators/routes";
import { useNavigation } from "@react-navigation/native";

import { HomeList } from "./home-list";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
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
            onTouchStart={(_e) => navigate(routes.SEARCH_PRODUCT)}
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

  const categoryData = [
    {
      id: 1,
      name: "Region's Best",
    },
    {
      id: 2,
      name: "Region's Best",
    },
    {
      id: 3,
      name: "Region's Best",
    },
    {
      id: 4,
      name: "Region's Best",
    },
    {
      id: 5,
      name: "Region's Best",
    },
    {
      id: 6,
      name: "Region's Best",
    },
    {
      id: 7,
      name: "Region's Best",
    },
    {
      id: 8,
      name: "Region's Best",
    },
    {
      id: 9,
      name: "Region's Best",
    },
    {
      id: 10,
      name: "Region's Best",
    },
  ];

  const cardData = [
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

  const trendData = [
    {
      id: 1,
      name: "Lettuce",
      amount: 500,
    },
    {
      id: 2,
      name: "Lettuce",
      amount: 500,
    },
    {
      id: 3,
      name: "Lettuce",
      amount: 500,
    },
    {
      id: 4,
      name: "Lettuce",
      amount: 500,
    },
  ];

  return (
    <Screen {...screenProps}>
      <ScrollView>
        <View>
          <BannerSlide {...bannerProps} />
        </View>
        <View style={{ height: 251, backgroundColor: "white" }}>
          <BaseText
            style={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
          >
            Categories
          </BaseText>
          <ScrollView
            keyboardShouldPersistTaps="always"
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}
          >
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{
                alignSelf: "flex-start",
              }}
              data={categoryData}
              numColumns={categoryData.length / 2}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }: any) => (
                <View style={styles.categoryContainer}>
                  <View style={styles.categoryCircle} />
                  <View style={styles.nameContainer}>
                    <BaseText style={styles.txtName}>{item.name}</BaseText>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <HomeList
          data={cardData}
          title={"Flash Deals"}
          info={"See More"}
          onPress={() => console.log("chevron pressed")}
        />
        <View style={{ height: 207, marginTop: 15, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row" }}>
            <BaseText
              style={{
                paddingLeft: 15,
                paddingTop: 15,
                fontSize: 16,
                lineHeight: 18.75,
                fontWeight: "400",
              }}
            >
              Trending Searches
            </BaseText>
            <TouchableWithoutFeedback onPress={() => console.log("refresh")}>
              <FontAwesome
                name="refresh"
                style={{ position: "absolute", right: 20, top: 10 }}
                size={24}
                color="#0AA351"
              />
            </TouchableWithoutFeedback>
          </View>

          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: "center",
              justifyContent: "center",
            }}
            data={trendData}
            numColumns={trendData.length / 2}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }: any) => <Trends item={item} />}
          />
        </View>
        <HomeList
          data={cardData}
          title={"Top Products"}
          info={"See More"}
          onPress={() => console.log("chevron pressed")}
        />
        <HomeList
          data={cardData}
          title={"Region's Best"}
          info={"See More"}
          onPress={() => console.log("chevron pressed")}
        />
        <HomeList
          data={cardData}
          title={"Upcoming Harvest/Supplies"}
          info={"See More"}
          onPress={() => console.log("chevron pressed")}
        />
        <HomeList
          data={cardData}
          title={"Products Near You"}
          info={"See More"}
          onPress={() => console.log("chevron pressed")}
        />
        <View style={{ marginTop: 20, marginBottom: 20 }} />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
