import React, { useState, useRef } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { CarouselData, Props } from "./types";
import { styles } from "./styles";

export const BannerSlide: React.FC<Props> = ({ carouselData }) => {
  const SLIDER_WIDTH = Dimensions.get("window").width;

  const ITEM_WIDTH = SLIDER_WIDTH;

  const renderImage = (item: { item: CarouselData }) => {
    return (
      <View>
        <Image source={{ uri: item.item.source }} style={styles.image} />
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
      <View style={styles.paginationStyle}>
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
