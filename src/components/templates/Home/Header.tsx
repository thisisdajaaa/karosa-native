/**
 *
 * Header
 * @format
 *
 */

import React, { FC, memo, useMemo } from "react";
import { ImageBackground, View } from "react-native";
import BaseHeader from "@app/molecules/Header";
import Searchbar from "@app/molecules/SearchBar";
import Icon from "@app/atoms/Icon";

import { HeaderStyles, HomeStyles } from "./styles";
import { ICON_SIZE, BLUR_RADIUS } from "./config";

const Header: FC = () => {
  const containerStyle = useMemo(() => [HeaderStyles.container], []);

  return (
    <View style={containerStyle}>
      <ImageBackground
        style={HeaderStyles.coverPhoto}
        blurRadius={BLUR_RADIUS}
        source={{
          uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg",
        }}
      >
        <BaseHeader
          containerStyle={HeaderStyles.headerContainer}
          barStyle="light-content"
          leftComponent={
            <Searchbar
              backgroundColor="primary"
              size="sm"
              placeholder="What are you looking for?"
            />
          }
          rightComponent={
            <View style={HomeStyles.horizontalContainer}>
              <Icon
                group="home"
                name="cart"
                height={ICON_SIZE.header}
                width={ICON_SIZE.header}
                extraStyle={HeaderStyles.cartIcon}
              />
              <Icon
                group="home"
                name="chat"
                height={ICON_SIZE.header}
                width={ICON_SIZE.header}
              />
            </View>
          }
        />
      </ImageBackground>
    </View>
  );
};

export default memo(Header);
