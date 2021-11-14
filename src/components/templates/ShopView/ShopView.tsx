/**
 *
 * ShopView
 * @format
 *
 */

import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import {
  FlatList,
  FlatListProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ENUM } from "@app/constants";
import { useScrollSync } from "@app/hooks";
import { theme } from "@app/styles";
import { HeaderConfig, ScrollPair } from "@app/utils";

import type { PropsType } from "./types";
import {
  HEADER_HEIGHT,
  OVERLAY_VISIBILITY_OFFSET,
  TAB_BAR_HEIGHT,
} from "./config";
import ShopList from "./ShopList";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import Header from "./Header";
import HeaderOverlay from "./HeaderOverlay";
import TabBar from "./TabBar";
import ShopViewStyles from "./styles";

const Tab = createMaterialTopTabNavigator();

const ShopViewTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { top, bottom } = useSafeAreaInsets();

  const { height: screenHeight } = useWindowDimensions();

  const shopRef = useRef<FlatList>(null);
  const productsRef = useRef<FlatList>(null);
  const categoriesRef = useRef<FlatList>(null);

  const [tabIndex, setTabIndex] = useState(0);

  const [headerHeight, setHeaderHeight] = useState(0);

  const defaultHeaderHeight = top + HEADER_HEIGHT;

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

  const shopScrollValue = useSharedValue(0);

  const shopScrollHandler = useAnimatedScrollHandler(
    (event) => (shopScrollValue.value = event.contentOffset.y)
  );

  const productsScrollValue = useSharedValue(0);

  const productsScrollHandler = useAnimatedScrollHandler(
    (event) => (productsScrollValue.value = event.contentOffset.y)
  );

  const categoriesScrollValue = useSharedValue(0);

  const categoriesScrollHandler = useAnimatedScrollHandler(
    (event) => (categoriesScrollValue.value = event.contentOffset.y)
  );

  const scrollPairs = useMemo<ScrollPair[]>(
    () => [
      { list: shopRef, position: shopScrollValue },
      { list: productsRef, position: productsScrollValue },
      { list: categoriesRef, position: categoriesScrollValue },
    ],
    [
      shopRef,
      shopScrollValue,
      productsRef,
      productsScrollValue,
      categoriesRef,
      categoriesScrollValue,
    ]
  );

  const { sync } = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(() => {
    switch (tabIndex) {
      case 0:
        return shopScrollValue.value;
      case 1:
        return productsScrollValue.value;
      default:
        return categoriesScrollValue.value;
    }
  }, [tabIndex, shopScrollValue, productsScrollValue, categoriesScrollValue]);

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff)
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const productsAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

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
      paddingTop: rendered ? headerHeight + TAB_BAR_HEIGHT : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sharedProps = useMemo<Partial<FlatListProps<any>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, sync, heightExpanded]
  );

  const renderShop = useCallback(
    () => (
      <ShopList ref={shopRef} onScroll={shopScrollHandler} {...sharedProps} />
    ),
    [shopRef, shopScrollHandler, sharedProps]
  );

  const renderProducts = useCallback(
    () => (
      <ProductList
        ref={productsRef}
        productsTabStyle={productsTabStyle}
        onScroll={productsScrollHandler}
        {...sharedProps}
      />
    ),
    [productsRef, productsScrollHandler, sharedProps]
  );

  const renderCategories = useCallback(
    () => (
      <CategoryList
        ref={categoriesRef}
        onScroll={categoriesScrollHandler}
        {...sharedProps}
      />
    ),
    [categoriesRef, categoriesScrollHandler, sharedProps]
  );

  const productsTabStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? ShopViewStyles.tabBarContainer : undefined,
      {
        top: rendered ? headerHeight + 48 : undefined,
      },
      productsAnimatedStyle,
    ],
    [rendered, headerHeight, productsAnimatedStyle]
  );

  const tabBarStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? ShopViewStyles.tabBarContainer : undefined,
      {
        top: rendered ? headerHeight : undefined,
      },
      tabBarAnimatedStyle,
    ],
    [rendered, headerHeight, tabBarAnimatedStyle]
  );

  const renderTabBar = useCallback<
    (tabProps: MaterialTopTabBarProps) => React.ReactElement
  >(
    (tabProps) => (
      <Animated.View style={tabBarStyle}>
        <TabBar
          onIndexChange={setTabIndex}
          style={{
            borderTopColor: theme.colors.light10,
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
          {...tabProps}
        />
      </Animated.View>
    ),
    [tabBarStyle]
  );

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? ShopViewStyles.headerContainer : undefined,
      headerAnimatedStyle,
    ],

    [rendered, top, headerAnimatedStyle]
  );

  const collapsedOverlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-headerDiff, OVERLAY_VISIBILITY_OFFSET - headerDiff, 0],
      [ENUM.Visibility.Visible, ENUM.Visibility.Hidden, ENUM.Visibility.Hidden]
    ),
  }));

  const collapsedOverlayStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      ShopViewStyles.collapsedOvarlay,
      collapsedOverlayAnimatedStyle,
      { height: heightCollapsed, paddingTop: top },
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top]
  );

  return (
    <View style={ShopViewStyles.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        <Header onBack={onBack} />
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        <HeaderOverlay onBack={onBack} />
      </Animated.View>
      <Tab.Navigator
        tabBar={renderTabBar}
        lazy
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.dark20,
          pressColor: theme.colors.primary,
          indicatorStyle: { backgroundColor: theme.colors.primary },
        }}
      >
        <Tab.Screen name="Shop">{renderShop}</Tab.Screen>
        <Tab.Screen name="Products">{renderProducts}</Tab.Screen>
        <Tab.Screen name="Categories">{renderCategories}</Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default ShopViewTemplate;
