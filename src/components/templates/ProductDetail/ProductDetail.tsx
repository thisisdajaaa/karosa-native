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
import RBSheet from "react-native-raw-bottom-sheet";
import { COMMON, ENUM } from "@app/constants";
import { useScrollSync } from "@app/hooks";
import { theme } from "@app/styles";
import { HeaderConfig, ScrollPair } from "@app/utils";
import ProductVariant from "@app/screens/ProductVariant";
import ProductCard from "@app/organisms/ProductCard";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { productList } from "./config";
import { ProductDetailStyles } from "./styles";
import ProductHeader from "./ProductHeader";
import ProductActions from "./ProductActions";
import ProductInformation from "./ProductInformation";
import ProductRatings from "./ProductRatings";
import ProductFooter from "./ProductFooter";

const ProductDetailTemplate: FC<PropsType> = (props) => {
  const { onBack, onReviews, routeParams, onRecommended } = props;

  const { top, bottom } = useSafeAreaInsets();

  const {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
  } = Animated;

  const productVariantRef = useRef<RBSheet>(null);

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
    <>
      <View style={ProductDetailStyles.container}>
        <Animated.View
          onLayout={handleHeaderLayout}
          style={headerContainerStyle}
        >
          <ProductHeader onBack={onBack} name={routeParams?.name} />
        </Animated.View>
        <Animated.View style={collapsedOverlayStyle}>
          <Header
            containerStyle={ProductDetailStyles.header}
            barStyle="dark-content"
            hasBottomDivider
            leftComponent={{
              icon: "arrow-back",
              color: theme.colors.primary,
              onPress: onBack,
            }}
            rightComponent={
              <View style={ProductDetailStyles.flexRow}>
                <Icon
                  group="products"
                  name="greenBasket"
                  height={24}
                  width={24}
                  extraStyle={ProductDetailStyles.iconMargin}
                />
                <Icon
                  group="products"
                  name="greenShare"
                  height={24}
                  width={24}
                  extraStyle={ProductDetailStyles.iconMargin}
                />
                <Icon
                  group="products"
                  name="greenMore"
                  height={24}
                  width={24}
                />
              </View>
            }
          />
        </Animated.View>

        <Animated.ScrollView onScroll={detailScrollHandler} {...sharedProps}>
          <ProductActions
            onVariations={() => productVariantRef.current?.open()}
          />

          <ProductInformation />

          <ProductRatings onReviews={onReviews} />

          <View style={ProductDetailStyles.recommendationsContainer}>
            <Text
              text="You May Also Like"
              textStyle={ProductDetailStyles.txtRecommendations}
            />

            <FlatList
              data={productList}
              horizontal
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={ProductDetailStyles.productListContainer}
              renderItem={({ item }) => (
                <View style={ProductDetailStyles.itemContainer}>
                  <ProductCard
                    name={item.name}
                    image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                    location="Cebu"
                    currentPrice="50"
                    wholesale
                    discount="30"
                    variation={COMMON.VARIATION.THREE}
                    onPress={() => onRecommended(item)}
                  />
                </View>
              )}
            />
          </View>

          <View style={ProductDetailStyles.spacer} />
        </Animated.ScrollView>

        <ProductFooter />
      </View>

      <ProductVariant sheetRef={productVariantRef} />
    </>
  );
};

export default ProductDetailTemplate;
