/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";

import HomeStyles from "./styles";
import Image from "@app/atoms/Image";
import { AntDesign } from "@expo/vector-icons";
import { FlatList, ScrollView, View } from "react-native";
import { categories, productCategories } from "./config";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
// import { Header } from "react-native-elements";
import type { PropsType } from "./types";
import Banner from "@app/atoms/Banner";
import { Screen } from "@app/components/molecules/Base-Screen";
import { theme } from "@app/styles";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";

const HomeTemplate: FC<PropsType> = (props) => {
  const { bannerProps, screenProps, productProps } = props;
  return (
    <Screen {...screenProps}>
      <ScrollView>
        {/* <View>
          <View>
            <Image
              source={{
                uri: "https://squadstate.com/wp-content/uploads/2020/03/ancient-apparition.jpg",
              }}
              imageStyle={HomeStyles.productImage}
            />
            <AntDesign
              name="ellipsis1"
              size={30}
              style={HomeStyles.iconStyleEllipsis}
            />
          </View>
        </View> */}
        <View style={HomeStyles.subContainer}>
          <View style={{ height: "15%" }}>
            <FlatList
              numColumns={1}
              data={categories}
              horizontal={true}
              windowSize={200}
              renderItem={({ item }: { item: any }) => (
                <TouchableOpacity
                  style={HomeStyles.categoriesCard}
                  onPress={() => console.log("testing")}>
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
              textStyle={{
                paddingLeft: 15,
                paddingTop: 15,
                fontSize: 16,
                lineHeight: 18.75,
                fontWeight: "400",
              }}
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
                    {
                      backgroundColor: theme.colors.light15,
                      width: 100,
                      height: 100,
                      paddingTop: 10,
                      borderRadius: 6,
                    },
                  ]}
                  onPress={() => console.log("testing")}>
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
          <Text
            text={"Flash Deals"}
            textStyle={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
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
                variation={COMMON.VARIATION.THREE}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <Text
            text={"Trending Searches"}
            textStyle={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
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
                variation={COMMON.VARIATION.THREE}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <Text
            text={"Region's Best"}
            textStyle={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
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
                variation={COMMON.VARIATION.THREE}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <Text
            text={"Upcoming Harvest/Supplies"}
            textStyle={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
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
                variation={COMMON.VARIATION.THREE}
              />
            )}
          />
        </View>

        <View style={HomeStyles.subContainer}>
          <Text
            text={"Products Near You"}
            textStyle={{
              paddingLeft: 15,
              paddingTop: 15,
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: "400",
            }}
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
                variation={COMMON.VARIATION.THREE}
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
                buttonTitle="Boost Now"
                onButtonClick={() => 0}
                discount={"20"}
                rating={item.rating}
                variation={COMMON.VARIATION.THREE}
              />
            )}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeTemplate;
