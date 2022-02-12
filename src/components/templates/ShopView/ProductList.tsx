/**
 *
 * ProductList
 * @format
 *
 */

import React, { forwardRef, memo, useCallback, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import { ListItem } from "react-native-elements";
import { COMMON } from "@app/constants";
import Text from "@app/atoms/Text";
import ProductCard from "@app/organisms/ProductCard";

import type { ActiveLink } from "./types";
import { dropdownStyle, linkLabels, ProductListStyles } from "./styles";
import { PRODUCTS } from "./config";

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductList = forwardRef<FlatList, any>((props, ref) => {
  const [activeLink, setActiveLink] = useState<ActiveLink>("Popular");
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const dropdown = dropdownStyle(activeLink, sortAsc).dropdownIcon;

  const renderContent = useCallback<ListRenderItem<any>>(
    ({ item }) => (
      <FlatList
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={ProductListStyles.columnWrapperContainer}
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
    ),
    []
  );

  const renderProductTabs = useCallback(() => {
    return (
      <Animated.View style={props.productsTabStyle}>
        <ListItem>
          <ListItem.Content style={ProductListStyles.primaryPadding}>
            <TouchableOpacity onPress={() => setActiveLink("Popular")}>
              <Text
                text="Popular"
                textStyle={linkLabels(activeLink, "Popular").txtLink}
              />
            </TouchableOpacity>
          </ListItem.Content>
          <ListItem.Content style={ProductListStyles.secondaryPadding}>
            <TouchableOpacity onPress={() => setActiveLink("Latest")}>
              <Text
                text="Latest"
                textStyle={linkLabels(activeLink, "Latest").txtLink}
              />
            </TouchableOpacity>
          </ListItem.Content>
          <ListItem.Content style={ProductListStyles.secondaryPadding}>
            <TouchableOpacity onPress={() => setActiveLink("Price")}>
              <Text
                text="Price"
                textStyle={linkLabels(activeLink, "Price").txtLink}
              />

              <ListItem.Content style={ProductListStyles.dropdownIconContainer}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setSortAsc(!sortAsc);
                  }}
                >
                  <AntDesign name="down" style={dropdown} />
                </TouchableWithoutFeedback>
              </ListItem.Content>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </Animated.View>
    );
  }, [props.productsTabStyle]);

  return (
    <>
      <>{renderProductTabs()}</>
      <AnimatedFlatList
        ref={ref}
        style={ProductListStyles.container}
        data={PRODUCTS}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderContent}
        {...props}
      />
    </>
  );
});

export default memo(ProductList);
