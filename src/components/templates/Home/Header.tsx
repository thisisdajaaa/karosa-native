/**
 *
 * Header
 * @format
 *
 */

import React, { FC, memo, useMemo } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import BaseHeader from "@app/molecules/Header";
import Searchbar from "@app/molecules/SearchBar";
import Icon from "@app/atoms/Icon";

import type { HeaderProps } from "./types";
import { HeaderStyles, HomeStyles } from "./styles";

const Header: FC<HeaderProps> = (props) => {
  const { style } = props;

  const containerStyle = useMemo(() => [HeaderStyles.container, style], []);

  return (
    <View style={containerStyle}>
      <ImageBackground
        style={HeaderStyles.coverPhoto}
        blurRadius={1}
        source={{
          uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg",
        }}
      >
        <StatusBar translucent backgroundColor="transparent" />
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
                height={30}
                width={30}
                extraStyle={{ margin: 5 }}
              />
              <Icon
                group="home"
                name="chat"
                height={30}
                width={30}
                extraStyle={{ margin: 5 }}
              />
            </View>
          }
        />
      </ImageBackground>
    </View>
  );
};

export default memo(Header);
