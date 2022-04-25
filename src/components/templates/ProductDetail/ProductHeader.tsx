/**
 *
 * ProductHeader
 * @format
 *
 */

import React, { FC, useRef, useState } from "react";
import { Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { DIMENS, theme } from "@app/styles";
import type { CarouselData } from "@app/atoms/Banner/types";
import Header from "@app/molecules/Header";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Rating from "@app/atoms/Rating";

import type { ProductHeaderProps } from "./types";
import { ProductHeaderStyles } from "./styles";

const ProductHeader: FC<ProductHeaderProps> = (props) => {
  const { onBack, name } = props;

  const [index, setIndex] = useState<number>(0);

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
        style={ProductHeaderStyles.image}
      />
    );
  };

  return (
    <>
      <View style={ProductHeaderStyles.container}>
        <Header
          barStyle="light-content"
          containerStyle={ProductHeaderStyles.header}
          leftComponent={{
            icon: "arrow-back",
            color: theme.colors.white,
            onPress: onBack,
          }}
          rightComponent={
            <View style={ProductHeaderStyles.flexRow}>
              <Icon
                group="products"
                name="whiteBasket"
                height={24}
                width={24}
                extraStyle={ProductHeaderStyles.icon}
              />
              <Icon
                group="products"
                name="share"
                height={24}
                width={24}
                extraStyle={ProductHeaderStyles.icon}
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
        <View style={ProductHeaderStyles.paginationContainer}>
          <Pagination
            dotsLength={carouselList.length}
            activeDotIndex={index}
            dotStyle={ProductHeaderStyles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.4}
          />
        </View>
      </View>

      <View style={ProductHeaderStyles.infoContainer}>
        <Text
          text={name}
          textStyle={ProductHeaderStyles.txtName}
          numberOfLines={3}
        />

        <View style={ProductHeaderStyles.priceContainer}>
          <Text text="P299" textStyle={ProductHeaderStyles.txtPrice} />
          <Text text="183 sold" textStyle={ProductHeaderStyles.txtSold} />
        </View>

        <View style={ProductHeaderStyles.bottomContainer}>
          <View style={ProductHeaderStyles.ratingsContainer}>
            <Rating ratingCount={5} readonly imageSize={20} startingValue={5} />
            <Text text="4.7" textStyle={ProductHeaderStyles.txtRating} />
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
