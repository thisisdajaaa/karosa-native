/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC } from "react";
import { ImageBackground, Pressable, StatusBar, View } from "react-native";
import Image from "@app/atoms/Image";
import Header from "@app/molecules/Header";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import { ADDRESS_LINE_NO, BLUR_RADIUS, ICON } from "./config";
import ProfileStyles from "./styles";

const VariationTwo: FC<PropsType> = (props) => {
  const {
    coverPhoto,
    avatarPhoto,
    onBack,
    onChat,
    onSettings,
    shopName,
    address,
    isActive,
    rating,
    followers,
    chatPerf,
  } = props;

  return (
    <View style={ProfileStyles.container}>
      <ImageBackground
        style={ProfileStyles.coverPhoto}
        blurRadius={BLUR_RADIUS}
        source={{ uri: coverPhoto }}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={ProfileStyles.statusBarSpacer} />
        <Header
          containerStyle={ProfileStyles.headerContainer}
          barStyle="light-content"
          leftComponent={{
            icon: "arrow-back",
            color: "white",
            onPress: onBack,
          }}
          rightComponent={
            <View style={ProfileStyles.flexRow}>
              <Pressable onPress={onSettings}>
                <Icon
                  group="common"
                  name="outlineSetting"
                  height={ICON.HEADING}
                  width={ICON.HEADING}
                  extraStyle={ProfileStyles.headingIcon}
                />
              </Pressable>

              <Pressable onPress={onChat}>
                <Icon
                  group="products"
                  name="whiteMessage"
                  height={ICON.HEADING}
                  width={ICON.HEADING}
                />
              </Pressable>
            </View>
          }
        />
      </ImageBackground>
      <View style={ProfileStyles.avatarContainer}>
        <Image
          imageStyle={ProfileStyles.avatarPhoto}
          source={{ uri: avatarPhoto }}
        />
      </View>

      <View style={ProfileStyles.profileContainer}>
        <View style={ProfileStyles.spacer} />

        <View style={ProfileStyles.nameContainer}>
          <Text text={shopName} textStyle={ProfileStyles.txtShopName} />
        </View>

        <View style={ProfileStyles.shopAddressSubContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Icon
              group="common"
              name="grayAddress"
              height={ICON.ADDRESS}
              width={ICON.ADDRESS}
              extraStyle={ProfileStyles.profileIcon}
            />
            <Text
              text={address}
              numberOfLines={ADDRESS_LINE_NO}
              textStyle={ProfileStyles.txtShopAddr}
            />
          </View>
          <View style={ProfileStyles.activeContainer}>
            <Icon
              group="common"
              name={isActive ? "greenCircle" : "grayCircle"}
              height={ICON.ACTIVITY}
              width={ICON.ACTIVITY}
              extraStyle={ProfileStyles.profileIcon}
            />
            <Text
              text={isActive ? "Active" : "Inactive"}
              textStyle={ProfileStyles.txtIcon}
            />
          </View>
        </View>

        <View style={ProfileStyles.bottomInfoContainer}>
          <View style={ProfileStyles.ratingContainer}>
            <Text
              text={`${rating} / 5.0`}
              textStyle={ProfileStyles.txtBottomValue}
            />
            <Text text="Shop Rating" textStyle={ProfileStyles.txtBottomLabel} />
          </View>
          <View style={ProfileStyles.followersContainer}>
            <Text text={followers} textStyle={ProfileStyles.txtBottomValue} />
            <Text text="Followers" textStyle={ProfileStyles.txtBottomLabel} />
          </View>
          <View style={ProfileStyles.chatPerformanceContainer}>
            <View style={ProfileStyles.chatPerfSubContainer}>
              <Text text={chatPerf} textStyle={ProfileStyles.txtBottomValue} />
            </View>
            <Text
              text=" Chat Performance"
              textStyle={ProfileStyles.txtBottomLabel}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default VariationTwo;
