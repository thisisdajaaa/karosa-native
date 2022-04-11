/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC, useRef, useState } from "react";

import { Image, View } from "react-native";
import { CarouselData } from "@app/atoms/Banner/types";
import { DIMENS, theme } from "@app/styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Header from "@app/components/molecules/Header";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Rating from "@app/atoms/Rating";

const ProductHeader: FC = () => {
  const [index, setIndex] = useState(0);

  const carouselRef = useRef<Carousel<CarouselData>>(null);

  const carouselList = [
    {
      source: "https://picsum.photos/200/300",
    },
    {
      source: "https://picsum.photos/200/300",
    },
    {
      source: "https://picsum.photos/200/300",
    },
  ];

  const renderImage = (item: { item: CarouselData }) => {
    return (
      <Image
        source={{ uri: item.item.source }}
        style={{
          width: DIMENS.screenWidth,
          height: 320,
          resizeMode: "cover",
        }}
      />
    );
  };

  return (
    <>
      <View style={{ position: "relative", overflow: "hidden" }}>
        <Header
          barStyle="light-content"
          containerStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            zIndex: 1,
          }}
          leftComponent={{ icon: "arrow-back", color: theme.colors.white }}
          rightComponent={
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Icon
                group="products"
                name="whiteBasket"
                height={24}
                width={24}
                extraStyle={{ marginRight: 16 }}
              />
              <Icon
                group="products"
                name="share"
                height={24}
                width={24}
                extraStyle={{ marginRight: 16 }}
              />
              <Icon group="common" name="more" height={24} width={24} />
            </View>
          }
        />
        <Carousel
          layout="default"
          data={carouselList}
          inactiveSlideScale={1}
          ref={carouselRef}
          renderItem={renderImage}
          sliderWidth={DIMENS.screenWidth}
          itemWidth={DIMENS.screenWidth}
          bounces={false}
          onSnapToItem={(value) => setIndex(value)}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "column-reverse",
            height: "100%",
            alignSelf: "center",
          }}
        >
          <Pagination
            dotsLength={carouselList.length}
            activeDotIndex={index}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: theme.colors.white,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.4}
          />
        </View>
      </View>

      <View style={{ backgroundColor: theme.colors.white, padding: 16 }}>
        <Text
          text="Mangosteen Product Name sample text characters multiple lines lines"
          textStyle={{ ...theme.textTitle, fontWeight: "500" }}
          numberOfLines={3}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 24,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            text="P299"
            textStyle={{
              ...theme.textTitle,
              fontWeight: "500",
              color: theme.colors.primary,
            }}
          />
          <Text
            text="183 sold"
            textStyle={{
              ...theme.textRegular,
              fontWeight: "400",
              color: theme.colors.dark30,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Rating ratingCount={5} readonly imageSize={20} startingValue={5} />
            <Text
              text="4.7"
              textStyle={{
                ...theme.textRegular,
                marginLeft: 8,
                fontWeight: "400",
                color: theme.colors.dark30,
              }}
            />
          </View>

          <Icon
            group="products"
            name="darkOutlineHeart"
            height={20}
            width={20}
          />
        </View>
      </View>
    </>
  );
};

export default ProductHeader;
