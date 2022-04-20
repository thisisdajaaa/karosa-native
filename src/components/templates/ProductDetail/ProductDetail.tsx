/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import {
  FlatList,
  FlatListProps,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ENUM } from "@app/constants";
import { useScrollSync } from "@app/hooks";
import { theme } from "@app/styles";
import { HeaderConfig, ScrollPair } from "@app/utils";
import ProductHeader from "./ProductHeader";
import Text from "@app/atoms/Text";
import Header from "@app/components/molecules/Header";
import Icon from "@app/atoms/Icon";
import ProductActions from "./ProductActions";
import ProductInformation from "./ProductInformation";
import ProductRatings from "./ProductRatings";
import { productList } from "./config";
import ProductCard from "@app/components/organisms/ProductCard";
import ProductFooter from "./ProductFooter";
import type { PropsType } from "./types";

const ProductDetailTemplate: FC<PropsType> = (props) => {
  const { onBack, onReviews } = props;

  const { top, bottom } = useSafeAreaInsets();

  const {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
  } = Animated;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const { height: screenHeight } = useWindowDimensions();

  const detailRef = useRef<FlatList>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  const defaultHeaderHeight = top + 48;

  const headerConfig = useMemo<HeaderConfig>(
    () => ({
      heightCollapsed: defaultHeaderHeight,
      heightExpanded: headerHeight,
    }),
    [defaultHeaderHeight, headerHeight]
  );

  const { heightCollapsed, heightExpanded } = headerConfig;

  const headerDiff = heightExpanded - heightCollapsed;

  const rendered = headerHeight > 0;

  const handleHeaderLayout = useCallback<NonNullable<ViewProps["onLayout"]>>(
    (event) => setHeaderHeight(event.nativeEvent.layout.height),
    []
  );

  const detailScrollValue = useSharedValue(0);

  const detailScrollHandler = useAnimatedScrollHandler(
    (event) => (detailScrollValue.value = event.contentOffset.y)
  );

  const scrollPairs = useMemo<ScrollPair[]>(
    () => [{ list: detailRef, position: detailScrollValue }],
    [detailRef, detailScrollValue]
  );

  const { sync } = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(
    () => detailScrollValue.value,
    [detailScrollValue]
  );

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff)
  );

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(
      translateY.value,
      [-headerDiff, 0],
      [ENUM.Visibility.Hidden, ENUM.Visibility.Visible]
    ),
  }));

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingTop: rendered ? headerHeight + 12 : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
      position: "relative",
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sharedProps = useMemo<Partial<FlatListProps<any>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      showsVerticalScrollIndicator: false,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, sync, heightExpanded]
  );

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered
        ? {
            top: 0,
            left: 0,
            right: 0,
            position: "absolute",
            zIndex: 1,
          }
        : undefined,
      headerAnimatedStyle,
    ],

    [rendered, top, headerAnimatedStyle]
  );

  const collapsedOverlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-headerDiff, 32 - headerDiff, 0],
      [ENUM.Visibility.Visible, ENUM.Visibility.Hidden, ENUM.Visibility.Hidden]
    ),
  }));

  const collapsedOverlayStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.white,
        justifyContent: "center",
        zIndex: 1,
      },
      collapsedOverlayAnimatedStyle,
      { height: heightCollapsed },
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top]
  );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        <ProductHeader onBack={onBack} />
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        <Header
          containerStyle={{ backgroundColor: theme.colors.transparent }}
          barStyle="light-content"
          leftComponent={{
            icon: "arrow-back",
            color: theme.colors.primary,
            onPress: onBack,
          }}
          rightComponent={
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Icon
                group="products"
                name="greenBasket"
                height={24}
                width={24}
                extraStyle={{ marginRight: 16 }}
              />
              <Icon
                group="products"
                name="greenShare"
                height={24}
                width={24}
                extraStyle={{ marginRight: 16 }}
              />
              <Icon group="products" name="greenMore" height={24} width={24} />
            </View>
          }
        />
      </Animated.View>

      <Animated.ScrollView onScroll={detailScrollHandler} {...sharedProps}>
        <ProductActions />

        <ProductInformation />

        <ProductRatings onReviews={onReviews} />

        <View
          style={{
            backgroundColor: theme.colors.white,
            marginVertical: 12,
            padding: 14,
          }}
        >
          <Text
            text="Variations"
            textStyle={{ ...theme.textSemiBold, marginBottom: 16 }}
          />

          <FlatList
            numColumns={1}
            data={productList}
            horizontal={true}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 24, paddingHorizontal: 4 }}
            renderItem={({ item }) => (
              <View style={{ marginRight: 8 }}>
                <ProductCard
                  name={item.name}
                  image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                  location="Cebu"
                  currentPrice="50"
                  wholesale
                  discount="30"
                  variation={3}
                />
              </View>
            )}
          />
        </View>

        <View style={{ height: 50 }} />
      </Animated.ScrollView>

      <ProductFooter />
    </View>
  );
};

export default ProductDetailTemplate;
