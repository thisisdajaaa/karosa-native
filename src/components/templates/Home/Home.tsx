/**
 *
 * Home
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COMMON } from "@app/constants";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import Banner from "@app/atoms/Banner";
import ProductCard from "@app/organisms/ProductCard";
import ListChevron from "@app/organisms/ListChevron";
import routes from "@app/navigators/routes";

import type { Product } from "./types";
import { HomeStyles } from "./styles";
import { data, ICON_SIZE, NUM_COLUMNS_ONE, NUM_COLUMNS_TWO } from "./config";
import Header from "./Header";

const HomeTemplate: FC = () => {
  const { navigate } = useNavigation();

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const displayCommonProducts = (
    products: Product[],
    title: string,
    sold?: boolean
  ) => (
    <View style={HomeStyles.subContainer}>
      <ListChevron
        hasBottomDivider={false}
        title={title}
        variation={COMMON.VARIATION.ONE}
        onPress={() => 0}
        info="See more"
        titleStyle={HomeStyles.titleStyle}
        infoStyle={HomeStyles.infoStyle}
        chevronColor={theme.colors.primary}
      />

      <FlatList
        numColumns={NUM_COLUMNS_ONE}
        data={products}
        horizontal={true}
        keyExtractor={keyExtractor}
        windowSize={300}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={HomeStyles.contentContainer}
        renderItem={({ item }) => (
          <View style={HomeStyles.productContainer}>
            <ProductCard
              name={item.name}
              image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
              sold={sold ? "30" : undefined}
              location={!sold ? "Cebu" : undefined}
              currentPrice="50"
              wholesale
              discount="30"
              variation={COMMON.VARIATION.THREE}
            />
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={HomeStyles.flexHome}>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <>
            <View style={HomeStyles.subContainer}>
              <FlatList
                numColumns={NUM_COLUMNS_ONE}
                data={item.categories}
                horizontal={true}
                keyExtractor={keyExtractor}
                windowSize={200}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={HomeStyles.categoryContent}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={HomeStyles.categoriesCard}
                    onPress={() => 0}
                  >
                    <Icon
                      group="home"
                      name={item.code}
                      width={ICON_SIZE.category}
                      height={ICON_SIZE.category}
                    />
                    <Text
                      text={item.name}
                      textStyle={HomeStyles.categoriesText}
                    />
                  </TouchableOpacity>
                )}
              />
              <View style={HomeStyles.bannerContainer}>
                <Banner carouselData={item.carousel} />
              </View>
              <View style={HomeStyles.mainCategories}>
                <Text
                  text="Categories"
                  textStyle={HomeStyles.categoryTextStyle}
                />

                <FlatList
                  data={item.productCategories}
                  horizontal={true}
                  keyExtractor={keyExtractor}
                  showsHorizontalScrollIndicator={false}
                  windowSize={300}
                  renderItem={({ item }) => (
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
                          group="wishlist"
                          name={item.code}
                          width={ICON_SIZE.wishlist}
                          height={ICON_SIZE.wishlist}
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

            {displayCommonProducts(item.products, "Flash Deals", true)}

            <View style={HomeStyles.subContainer}>
              <ListItem bottomDivider={false}>
                <ListItem.Content>
                  <Text text="Trending Searches" />
                </ListItem.Content>
                <Icon group="home" name="loop" height={30} width={30} />
              </ListItem>

              <FlatList
                numColumns={NUM_COLUMNS_TWO}
                data={item.trendingCategories}
                horizontal={false}
                windowSize={300}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={HomeStyles.row}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      HomeStyles.trendingCard,
                      HomeStyles.horizontalContainer,
                    ]}
                    onPress={() => 0}
                  >
                    <View>
                      <Text
                        text={item.name}
                        textStyle={HomeStyles.txtTrendingSearch}
                      />
                      <Text
                        text="100 products"
                        textStyle={HomeStyles.txtTrendingProducts}
                      />
                    </View>
                    <Icon
                      extraStyle={HomeStyles.wishlistIcon}
                      group="wishlist"
                      name={item.code}
                      width={ICON_SIZE.category}
                      height={ICON_SIZE.category}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>

            {displayCommonProducts(item.products, "Region's Best", true)}

            {displayCommonProducts(
              item.products,
              "Upcoming Harvest/Supplies",
              true
            )}

            {displayCommonProducts(item.products, "Products Near You")}

            <View style={HomeStyles.lastSectionContainer}>
              <FlatList
                numColumns={NUM_COLUMNS_TWO}
                data={item.products}
                listKey={String(keyExtractor)}
                columnWrapperStyle={HomeStyles.lastSection}
                renderItem={({ item }) => (
                  <ProductCard
                    name={item.name}
                    image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                    sold="30"
                    currentPrice="50"
                    previousPrice="100"
                    discount="20"
                    location="Cebu"
                    wholesale
                    rating={2}
                    variation={COMMON.VARIATION.TWO}
                  />
                )}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

export default HomeTemplate;
