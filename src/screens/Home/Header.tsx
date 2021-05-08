import { DIMENS, SPACING, theme } from "@app/styles";
import React, { FC, Fragment, memo, useMemo } from "react";
import {
  ImageBackground,
  ImageProps,
  StatusBar,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import BaseHeader from "@app/molecules/Header";
import Searchbar from "@app/molecules/SearchBar";
import Image from "@app/atoms/Image";
import { ICON } from "@app/components/organisms/Profile/config";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";

import Icon from "@app/atoms/Icon";

export const PHOTO_SIZE = 120;

type Props = Pick<ViewProps, "style"> & {
  photo: string;
  name: string;
  bio: string;
};

const Header: FC<Props> = ({ style, name, photo, bio }) => {
  const containerStyle = useMemo(() => [styles.container, style], []);

  const photoSource = useMemo<ImageProps["source"]>(() => ({ uri: photo }), []);

  return (
    <View style={containerStyle}>
      <ImageBackground
        style={styles.coverPhoto}
        blurRadius={1}
        source={{
          uri:
            "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg",
        }}>
        <StatusBar translucent backgroundColor="transparent" />
        <BaseHeader
          containerStyle={styles.headerContainer}
          barStyle="light-content"
          leftComponent={{
            icon: "arrow-back",
            color: "white",
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
      <View style={styles.avatarContainer}>
        <Image
          imageStyle={styles.avatarPhoto}
          source={{
            uri:
              "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          width: DIMENS.screenWidth,
          flexDirection: "column",
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          <View style={{ width: 100, marginRight: 10, marginTop: 15 }}>
            <Button
              icon={
                <Icon
                  group="common"
                  name="chat"
                  width={ICON.BUTTON}
                  height={ICON.BUTTON}
                  extraStyle={styles.chatIcon}
                />
              }
              titleStyle={styles.txtChat}
              buttonStyle={styles.btnChat}
              title={"Chat"}
            />
          </View>
          <View style={{ width: 100, marginRight: 10, marginTop: 15 }}>
            <Button
              icon={
                <Icon
                  group="products"
                  name="add"
                  width={ICON.BUTTON}
                  height={ICON.BUTTON}
                  extraStyle={styles.personIcon}
                />
              }
              titleStyle={styles.txtPerson}
              buttonStyle={styles.btnPerson}
              title={"Follow"}
            />
          </View>
        </View>
        <View style={styles.shopNameContainer}>
          <Text text="Mercado de Karosa Shop" textStyle={styles.txtShopName} />
        </View>
        <View style={styles.shopAddrContainer}>
          <Text text="166, Apas Lahug Cebu" textStyle={styles.txtShopAddr} />
          <View style={styles.activeContainer}>
            <Fragment>
              <Icon
                group="common"
                name={"greenCircle"}
                height={8}
                width={8}
                extraStyle={styles.activeIcon}
              />
              <Text text={"Active"} textStyle={styles.txtIcon} />
            </Fragment>
          </View>
        </View>
        <View style={styles.bottomInfoContainer}>
          <View style={styles.ratingContainer}>
            <Text text={`2.0 / 5.0`} textStyle={styles.txtBottomValue} />
            <Text text="Shop Rating" textStyle={styles.txtBottomLabel} />
          </View>
          <View style={styles.followersContainer}>
            <Text text="4.3K" textStyle={styles.txtBottomValue} />
            <Text text="Followers" textStyle={styles.txtBottomLabel} />
          </View>
          <View style={styles.chatPerformanceContainer}>
            <Text
              text="89%"
              textStyle={[styles.txtBottomValue, { marginLeft: 4 }]}
            />
            <Text text=" Chat Performance" textStyle={styles.txtBottomLabel} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    height: 300,
  },
  avatarPhoto: {
    width: DIMENS.screenHeight * 0.15,
    height: DIMENS.screenHeight * 0.15,
    borderRadius: (DIMENS.screenHeight * 0.15) / 2,
    borderColor: theme.colors.white,
    borderWidth: 5,
  },
  avatarContainer: {
    position: "absolute",
    top: DIMENS.screenHeight * 0.14,
    left: DIMENS.screenWidth * 0.038,
    zIndex: 1,
  },
  coverPhoto: {
    height: DIMENS.screenHeight * 0.22,
  },
  headerContainer: { backgroundColor: theme.colors.transparent },
  chatIcon: {
    position: "absolute",
    left: 25,
  },
  txtChat: {
    ...theme.textLight,
    alignSelf: "center",
    position: "relative",
    left: 10,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  btnChat: {
    height: 32,
    borderRadius: 3,
    backgroundColor: theme.colors.light10,
  },
  personIcon: {
    position: "absolute",
    left: DIMENS.screenWidth * 0.05,
  },
  txtPerson: {
    ...theme.textLight,
    alignSelf: "center",
    position: "relative",
    left: DIMENS.screenWidth * 0.02,
    fontWeight: "700",
  },
  btnPerson: {
    height: 32,
    borderRadius: 3,
  },
  shopNameContainer: {
    marginTop: 10,
  },
  txtShopName: {
    ...theme.textBold,
    fontWeight: "500",
  },
  shopAddrContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  txtShopAddr: {
    ...theme.textLight,
    fontWeight: "300",
  },
  activeContainer: {
    flexDirection: "row",
    marginLeft: SPACING.md,
  },
  activeIcon: {
    marginTop: SPACING.xs - 1,
  },
  txtIcon: {
    ...theme.textLightBold,
    marginLeft: SPACING.xs,
    fontWeight: "700",
  },
  bottomInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "column",
  },
  txtBottomValue: {
    ...theme.textLightBold,
    fontWeight: "700",
  },
  txtBottomLabel: {
    ...theme.textLight,
    fontWeight: "300",
  },
  followersContainer: {
    flexDirection: "column",
  },
  chatPerformanceContainer: {
    flexDirection: "column",
  },
});

export default memo(Header);
