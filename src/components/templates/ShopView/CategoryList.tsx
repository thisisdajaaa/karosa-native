/**
 *
 * CategoryList
 * @format
 *
 */

import React, { forwardRef, memo, useCallback } from "react";
import Animated from "react-native-reanimated";
import { FlatList, ListRenderItem } from "react-native";
import { COMMON } from "@app/constants";
import ListChevron from "@app/organisms/ListChevron";

import { CATEGORIES } from "./config";
import { CategoryListStyles } from "./styles";

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

/* eslint-disable @typescript-eslint/no-explicit-any */
const CategoryList = forwardRef<FlatList, any>((props, ref) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderContent = useCallback<ListRenderItem<any>>(
    ({ item }) => (
      <FlatList
        keyExtractor={keyExtractor}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        data={item.categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListChevron
            variation={COMMON.VARIATION.TWO}
            hasBottomDivider
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => 0}
            avatar={item.avatar}
          />
        )}
      />
    ),
    []
  );

  return (
    <AnimatedFlatList
      ref={ref}
      style={CategoryListStyles.container}
      data={CATEGORIES}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderContent}
      {...props}
    />
  );
});

export default memo(CategoryList);
