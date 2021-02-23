/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import Image from "@app/atoms/Image";
import Button from "@app/atoms/Button";
import Header from "@app/molecules/Header";
import Searchbar from "@app/molecules/SearchBar";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import type { VariatonOne } from "./types";
import { BLUR_RADIUS, ICON } from "./config";
import ProfileStyles from "./styles";

const VariationOne: FC<VariatonOne> = (props) => {
  const {
    coverPhoto,
    avatarPhoto,
    searchProps,
    onBack,
    onMore,
    onChat,
    onAdd,
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
          centerComponent={<Searchbar {...searchProps} />}
          rightComponent={{
            icon: "more-horiz",
            color: "white",
            onPress: onMore,
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
              name="chat"
              width={ICON.BUTTON}
              height={ICON.BUTTON}
              extraStyle={ProfileStyles.chatIcon}
            />
          }
          onPress={onChat}
          titleStyle={ProfileStyles.txtChat}
          buttonStyle={ProfileStyles.btnChat}
          title={"Chat"}
        />
        <Button
          icon={
            <Icon
              group="products"
              name="add"
              width={ICON.BUTTON}
              height={ICON.BUTTON}
              extraStyle={ProfileStyles.personIcon}
            />
          }
          onPress={onAdd}
          titleStyle={ProfileStyles.txtPerson}
          buttonStyle={ProfileStyles.btnPerson}
          title={"Chat"}
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
                text={isActive ? "active" : "inactive"}
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
          <View style={ProfileStyles.followersPerfContainer}>
            <Text text={followers} textStyle={ProfileStyles.txtBottomValue} />
            <Text text="Followers" textStyle={ProfileStyles.txtBottomLabel} />
          </View>
          <View style={ProfileStyles.followersPerfContainer}>
            <Text text={chatPerf} textStyle={ProfileStyles.txtBottomValue} />
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

export default VariationOne;
