/**
 *
 * Banner
 * @format
 *
 */

import React, { FC, useState, useRef } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import type { PropsType, CarouselData } from "./types";
import BannerStyles from "./styles";

const Banner: FC<PropsType> = (props) => {
  const { carouselData } = props;
  const SLIDER_WIDTH = Dimensions.get("window").width;

  const ITEM_WIDTH = SLIDER_WIDTH;

  const renderImage = (item: { item: CarouselData }) => {
    return (
      <View>
        <Image source={{ uri: item.item.source }} style={BannerStyles.image} />
      </View>
    );
  };

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View>
      <View>
        <Carousel
          layout={"stack"}
          data={carouselData}
          ref={isCarousel}
          renderItem={renderImage}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layoutCardOffset={0}
          onSnapToItem={(value) => setIndex(value)}
        />
      </View>
      <View style={BannerStyles.paginationStyle}>
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={index}
          tappableDots={true}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "white",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default Banner;
