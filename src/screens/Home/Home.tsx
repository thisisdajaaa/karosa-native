import { ENUM } from "@app/constants";
import { useScrollSync } from "@app/hooks";
import { theme } from "@app/styles";
import { Connection, HeaderConfig, ScrollPair } from "@app/utils";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
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
import { FRIENDS, SUGGESTIONS } from "./config";
import ConnectionList from "./ConnectionList";
import Header from "./Header";
import HeaderOverlay from "./HeaderOverlay";
import TabBar from "./TabBar";

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = 48;

const OVERLAY_VISIBILITY_OFFSET = 32;

const Tab = createMaterialTopTabNavigator();

const Home: FC = () => {
  const { top, bottom } = useSafeAreaInsets();

  const { height: screenHeight } = useWindowDimensions();

  const friendsRef = useRef<FlatList>(null);
  const suggestionsRef = useRef<FlatList>(null);

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

  const friendsScrollValue = useSharedValue(0);

  const friendsScrollHandler = useAnimatedScrollHandler(
    (event) => (friendsScrollValue.value = event.contentOffset.y)
  );

  const suggestionsScrollValue = useSharedValue(0);

  const suggestionsScrollHandler = useAnimatedScrollHandler(
    (event) => (suggestionsScrollValue.value = event.contentOffset.y)
  );

  const scrollPairs = useMemo<ScrollPair[]>(
    () => [
      { list: friendsRef, position: friendsScrollValue },
      { list: suggestionsRef, position: suggestionsScrollValue },
    ],
    [friendsRef, friendsScrollValue, suggestionsRef, suggestionsScrollValue]
  );

  const { sync } = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(
    () =>
      tabIndex === 0 ? friendsScrollValue.value : suggestionsScrollValue.value,
    [tabIndex, friendsScrollValue, suggestionsScrollValue]
  );

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff)
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
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

  const sharedProps = useMemo<Partial<FlatListProps<Connection>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, sync, heightExpanded]
  );

  const renderFriends = useCallback(
    () => (
      <ConnectionList
        ref={friendsRef}
        data={FRIENDS}
        onScroll={friendsScrollHandler}
        {...sharedProps}
      />
    ),
    [friendsRef, friendsScrollHandler, sharedProps]
  );

  const renderSuggestions = useCallback(
    () => (
      <ConnectionList
        ref={suggestionsRef}
        data={SUGGESTIONS}
        onScroll={suggestionsScrollHandler}
        {...sharedProps}
      />
    ),
    [suggestionsRef, suggestionsScrollHandler, sharedProps]
  );

  const tabBarStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? styles.tabBarContainer : undefined,
      {
        top: rendered ? headerHeight : undefined,
      },
      tabBarAnimatedStyle,
    ],
    [rendered, headerHeight, tabBarAnimatedStyle]
  );

  const renderTabBar = useCallback<
    (props: MaterialTopTabBarProps) => React.ReactElement
  >(
    (props) => (
      <Animated.View style={tabBarStyle}>
        <TabBar
          onIndexChange={setTabIndex}
          style={{
            borderTopColor: theme.colors.light10,
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
          {...props}
        />
      </Animated.View>
    ),
    [tabBarStyle]
  );

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [rendered ? styles.headerContainer : undefined, headerAnimatedStyle],

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
      styles.collapsedOvarlay,
      collapsedOverlayAnimatedStyle,
      { height: heightCollapsed, paddingTop: top },
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top]
  );

  return (
    <View style={styles.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        <Header
          name="Emily Davis"
          bio="Let's get started 🚀"
          photo={"https://picsum.photos/id/1027/300/300"}
        />
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        <HeaderOverlay name="Emily Davis" />
      </Animated.View>
      <Tab.Navigator
        tabBar={renderTabBar}
        lazy
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.dark20,
          pressColor: theme.colors.primary,
          indicatorStyle: { backgroundColor: theme.colors.primary },
        }}>
        <Tab.Screen name="Shop">{renderFriends}</Tab.Screen>
        <Tab.Screen name="Products">{renderSuggestions}</Tab.Screen>
        <Tab.Screen name="Categories">{renderFriends}</Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
  collapsedOvarlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 2,
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
});

export default Home;
