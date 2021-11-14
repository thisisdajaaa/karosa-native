/**
 *
 * Header
 * @format
 *
 */

import React, { FC, Fragment, memo, useMemo } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { ICON } from "@app/organisms/Profile/config";
import BaseHeader from "@app/molecules/Header";
import Searchbar from "@app/molecules/SearchBar";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import Icon from "@app/atoms/Icon";

import type { HeaderProps } from "./types";
import { HeaderStyles } from "./styles";

const Header: FC<HeaderProps> = (props) => {
  const { onBack, style } = props;

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
          leftComponent={{
            icon: "arrow-back",
            color: "white",
            onPress: onBack,
          }}
          centerComponent={
            <Searchbar
              backgroundColor="primary"
              size="sm"
              placeholder="Search in Shop"
            />
          }
          rightComponent={{
            icon: "more-horiz",
            color: "white",
          }}
        />
      </ImageBackground>
      <View style={HeaderStyles.avatarContainer}>
        <Image
          imageStyle={HeaderStyles.avatarPhoto}
          source={{
            uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
          }}
          resizeMode="contain"
        />
      </View>
      <View style={HeaderStyles.buttonMainContainer}>
        <View style={HeaderStyles.buttonSubContainer}>
          <View style={HeaderStyles.buttonContainer}>
            <Button
              icon={
                <Icon
                  group="common"
                  name="chat"
                  width={ICON.BUTTON}
                  height={ICON.BUTTON}
                  extraStyle={HeaderStyles.chatIcon}
                />
              }
              titleStyle={HeaderStyles.txtChat}
              buttonStyle={HeaderStyles.btnChat}
              title={"Chat"}
            />
          </View>
          <View style={HeaderStyles.buttonContainer}>
            <Button
              icon={
                <Icon
                  group="products"
                  name="add"
                  width={ICON.BUTTON}
                  height={ICON.BUTTON}
                  extraStyle={HeaderStyles.personIcon}
                />
              }
              titleStyle={HeaderStyles.txtPerson}
              buttonStyle={HeaderStyles.btnPerson}
              title={"Follow"}
            />
          </View>
        </View>
        <View style={HeaderStyles.shopNameContainer}>
          <Text
            text="Mercado de Karosa Shop"
            textStyle={HeaderStyles.txtShopName}
          />
        </View>
        <View style={HeaderStyles.shopAddrContainer}>
          <Text
            text="166, Apas Lahug Cebu"
            textStyle={HeaderStyles.txtShopAddr}
          />
          <View style={HeaderStyles.activeContainer}>
            <Fragment>
              <Icon
                group="common"
                name={"greenCircle"}
                height={8}
                width={8}
                extraStyle={HeaderStyles.activeIcon}
              />
              <Text text={"Active"} textStyle={HeaderStyles.txtIcon} />
            </Fragment>
          </View>
        </View>
        <View style={HeaderStyles.bottomInfoContainer}>
          <View style={HeaderStyles.ratingContainer}>
            <Text text={`2.0 / 5.0`} textStyle={HeaderStyles.txtBottomValue} />
            <Text text="Shop Rating" textStyle={HeaderStyles.txtBottomLabel} />
          </View>
          <View style={HeaderStyles.followersContainer}>
            <Text text="4.3K" textStyle={HeaderStyles.txtBottomValue} />
            <Text text="Followers" textStyle={HeaderStyles.txtBottomLabel} />
          </View>
          <View style={HeaderStyles.chatPerformanceContainer}>
            <Text
              text="89%"
              textStyle={[
                HeaderStyles.txtBottomValue,
                HeaderStyles.txtChatPerf,
              ]}
            />
            <Text
              text=" Chat Performance"
              textStyle={HeaderStyles.txtBottomLabel}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
