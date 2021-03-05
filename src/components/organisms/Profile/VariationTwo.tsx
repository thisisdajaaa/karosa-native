/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import Image from "@app/atoms/Image";
import Button from "@app/atoms/Button";
import Header from "@app/molecules/Header";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import { BLUR_RADIUS, ICON } from "./config";
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
    <Fragment>
      <ImageBackground
        style={ProfileStyles.coverPhoto}
        blurRadius={BLUR_RADIUS}
        source={{ uri: coverPhoto }}>
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
          rightComponent={{
            icon: "chat",
            color: "white",
            onPress: onChat,
          }}
        />
      </ImageBackground>
      <View style={ProfileStyles.avatarContainer}>
        <Image
          imageStyle={ProfileStyles.avatarPhoto}
          source={{ uri: avatarPhoto }}
        />
      </View>
      <View style={ProfileStyles.profileInfoContainer}>
        <Button
          icon={
            <Icon
              group="common"
              name="settingsWhite"
              width={ICON.BUTTON}
              height={ICON.BUTTON}
              extraStyle={ProfileStyles.settingsIcon}
            />
          }
          onPress={onSettings}
          titleStyle={ProfileStyles.txtPerson}
          buttonStyle={ProfileStyles.btnPerson}
          title={"Settings"}
        />
        <View style={ProfileStyles.shopNameContainer}>
          <Text text={shopName} textStyle={ProfileStyles.txtShopName} />
        </View>
        <View style={ProfileStyles.shopAddrContainer}>
          <Text text={address} textStyle={ProfileStyles.txtShopAddr} />
          <View style={ProfileStyles.activeContainer}>
            <Fragment>
              <Icon
                group="common"
                name={isActive ? "greenCircle" : "grayCircle"}
                height={ICON.ACTIVITY}
                width={ICON.ACTIVITY}
                extraStyle={ProfileStyles.activeIcon}
              />
              <Text
                text={isActive ? "Active" : "Inactive"}
                textStyle={ProfileStyles.txtIcon}
              />
            </Fragment>
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
    </Fragment>
  );
};

export default VariationTwo;
