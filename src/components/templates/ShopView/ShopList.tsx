/**
 *
 * ShopList
 * @format
 *
 */

import React, { forwardRef, memo, useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import Animated from "react-native-reanimated";
import DiscountCoupon from "@app/molecules/DiscountCoupon";
import ListChevron from "@app/organisms/ListChevron";
import ProductCard from "@app/organisms/ProductCard";
import { COMMON } from "@app/constants";
import { theme } from "@app/styles";

import { SHOP_ITEMS } from "./config";
import { ShopListStyles } from "./styles";

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

/* eslint-disable @typescript-eslint/no-explicit-any */
const ShopList = forwardRef<FlatList, any>((props, ref) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderContent = useCallback<ListRenderItem<any>>(
    ({ item }) => (
      <>
        <FlatList
          keyExtractor={keyExtractor}
          data={item.discounts}
          horizontal
          contentContainerStyle={ShopListStyles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: any) => (
            <View style={ShopListStyles.couponContainer}>
              <DiscountCoupon
                minSpendPrice={item.minSpendPrice}
                discountPrice={item.discountPrice}
                validDate={item.validDate}
              />
            </View>
          )}
        />
        <ListChevron
          info="See All"
          infoStyle={ShopListStyles.txtInfo}
          variation={1}
          chevronColor={theme.colors.primary}
          title="Selection for you"
          onPress={() => 0}
        />
        <FlatList
          keyExtractor={keyExtractor}
          numColumns={2}
          columnWrapperStyle={ShopListStyles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
          data={item.products}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: any) => (
            <ProductCard
              name={item.name}
              image={item.image}
              rating={item.rating}
              location={item.location}
              wholesale={item.wholesale}
              sold={item.sold}
              currentPrice={item.currentPrice}
              previousPrice={item.previousPrice}
              discount={item.discount}
              variation={COMMON.VARIATION.TWO}
            />
          )}
        />
      </>
    ),
    []
  );

  return (
    <AnimatedFlatList
      ref={ref}
      style={ShopListStyles.container}
      data={SHOP_ITEMS}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderContent}
      {...props}
    />
  );
});

export default memo(ShopList);
