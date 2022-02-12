/**
 *
 * Banner
 * @format
 *
 */

import React, { FC, useState, useRef } from "react";
import { Image, View } from "react-native";
import { DIMENS } from "@app/styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  INACTIVEDOTOPACITY,
  INACTIVESCALEDOT,
  LAYOUTCARDOFFSET,
} from "./config";

import type { PropsType, CarouselData } from "./types";
import BannerStyles from "./styles";

const Banner: FC<PropsType> = (props) => {
  const { carouselData } = props;
  const SLIDER_WIDTH = DIMENS.screenWidth * 0.9;

  const renderImage = (item: { item: CarouselData }) => {
    return (
      <View>
        <Image source={{ uri: item.item.source }} style={BannerStyles.image} />
      </View>
    );
  };

  const [index, setIndex] = useState(0);
  const carouselRef = useRef<Carousel<CarouselData>>(null);

  return (
    <View style={BannerStyles.bannerContainer}>
      <Carousel
        layout="stack"
        data={carouselData}
        ref={carouselRef}
        renderItem={renderImage}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        layoutCardOffset={LAYOUTCARDOFFSET}
        onSnapToItem={(value) => setIndex(value)}
      />
      <View style={BannerStyles.paginationStyle}>
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={index}
          dotStyle={BannerStyles.dotStyle}
          inactiveDotOpacity={INACTIVEDOTOPACITY}
          inactiveDotScale={INACTIVESCALEDOT}
        />
      </View>
    </View>
  );
};

export default Banner;
