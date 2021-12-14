/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";

import { HomeStyles } from "./styles/index";
import { FlatList, ScrollView, View } from "react-native";
import { categories, productCategories, trendingCategories } from "./config";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import type { PropsType } from "./types";
import Banner from "@app/atoms/Banner";
import { theme } from "@app/styles";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
import ListChevron from "@app/components/organisms/ListChevron";
import Image from "@app/atoms/Image";
import routes from "@app/navigators/routes";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import { ListItem } from "react-native-elements";
const HomeTemplate: FC<PropsType> = (props) => {
  const { bannerProps, productProps } = props;
  const { goBack, navigate } = useNavigation();
  return (
    <View style={HomeStyles.flexHome}>
      <Header onBack={() => console.log("testing")} style={undefined} />
      <ScrollView>
        <Image
          source={{
            uri: "https://squadstate.com/wp-content/uploads/2020/03/ancient-apparition.jpg",
          }}
          imageStyle={HomeStyles.productImage}
        />

        <View style={HomeStyles.subContainer}>
          <View style={HomeStyles.subContainerView}>
            <FlatList
              numColumns={1}
              data={categories}
              horizontal={true}
              windowSize={200}
              renderItem={({ item }: { item: any }) => (
                <TouchableOpacity
                  style={HomeStyles.categoriesCard}
                  onPress={() => console.log("testing")}
                >
                  <Icon
                    group={"home"}
                    name={item.code}
                    width={50}
                    height={50}
                  />
                  <Text
                    text={item.name}
                    textStyle={HomeStyles.categoriesText}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Banner {...bannerProps} />
          </View>
          <View>
            <Text
              text={"Categories"}
              textStyle={HomeStyles.categoryTextStyle}
            />

            <FlatList
              numColumns={1}
              data={productCategories}
              horizontal={true}
              windowSize={300}
              renderItem={({ item }: { item: any }) => (
                <TouchableOpacity
                  style={[
                    HomeStyles.categoriesCard,
                    HomeStyles.categoryCardStyle,
                  ]}
                  onPress={() =>
                    navigate("Stack", {
                      screen: routes.HOME_SEARCH,
                      params: {
                        categories: item.code,
                      },
                    })
                  }
                >
                  <View>
                    <Icon
                      group={"wishlist"}
                      name={item.code}
                      width={50}
                      height={50}
                    />
                  </View>
                  <Text
                    text={item.name}
                    textStyle={HomeStyles.categoriesText}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View style={HomeStyles.subContainer}>
          <ListChevron
            hasBottomDivider={false}
            title={"Flash Deals"}
            variation={COMMON.VARIATION.ONE}
            onPress={() => console.log("testing")}
            info={"See more"}
            infoStyle={HomeStyles.infoStyle}
            chevronColor={theme.colors.green5}
          />

          <FlatList
            numColumns={1}
            data={productProps}
            horizontal={true}
            windowSize={300}
            renderItem={({ item }: { item: any }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice={"50"}
                previousPrice={"100"}
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.TWO}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <ListItem bottomDivider={false}>
            <ListItem.Content>
              <ListItem.Title>{"Trending Searches"}</ListItem.Title>
            </ListItem.Content>
            <Icon
              group="home"
              name="loop"
              height={30}
              width={30}
              extraStyle={{ margin: 5 }}
            />
          </ListItem>

          <FlatList
            numColumns={2}
            data={trendingCategories}
            horizontal={false}
            windowSize={300}
            columnWrapperStyle={HomeStyles.row}
            renderItem={({ item }: { item: any }) => (
              <TouchableOpacity
                style={[
                  HomeStyles.trendingCard,
                  HomeStyles.horizontalContainer,
                ]}
                onPress={() => console.log("testing")}
              >
                <View>
                  <Text text={item.name} textStyle={HomeStyles.fontBold} />
                  <Text
                    text={"100 products"}
                    textStyle={HomeStyles.categoriesText}
                  />
                </View>
                <View>
                  <Icon
                    extraStyle={{ marginLeft: 20 }}
                    group={"wishlist"}
                    name={item.code}
                    width={50}
                    height={50}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <ListChevron
            hasBottomDivider={false}
            title={"Region's Best"}
            variation={COMMON.VARIATION.ONE}
            onPress={() => navigate(routes.HOME_SEARCH)}
            info={"See more"}
            infoStyle={HomeStyles.infoStyle}
            chevronColor={theme.colors.green5}
          />

          <FlatList
            numColumns={1}
            data={productProps}
            horizontal={true}
            windowSize={300}
            renderItem={({ item }: { item: any }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice={"50"}
                previousPrice={"100"}
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.TWO}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <ListChevron
            hasBottomDivider={false}
            title={"Upcoming Harvest/Supplies"}
            variation={COMMON.VARIATION.ONE}
            onPress={() => console.log("testing")}
            info={"See more"}
            infoStyle={HomeStyles.infoStyle}
            chevronColor={theme.colors.green5}
          />

          <FlatList
            numColumns={1}
            data={productProps}
            horizontal={true}
            windowSize={300}
            renderItem={({ item }: { item: any }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice={"50"}
                previousPrice={"100"}
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.TWO}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <ListChevron
            hasBottomDivider={false}
            title={"Products Near You"}
            variation={COMMON.VARIATION.ONE}
            onPress={() => console.log("testing")}
            info={"See more"}
            infoStyle={HomeStyles.infoStyle}
            chevronColor={theme.colors.green5}
          />

          <FlatList
            numColumns={1}
            data={productProps}
            horizontal={true}
            windowSize={300}
            renderItem={({ item }: { item: any }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice={"50"}
                previousPrice={"100"}
                buttonTitle="Boost Now"
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.TWO}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <FlatList
            numColumns={2}
            data={productProps}
            horizontal={false}
            renderItem={({ item }: { item: any }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice={"50"}
                previousPrice={"100"}
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.TWO}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeTemplate;
