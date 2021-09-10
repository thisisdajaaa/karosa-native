/**
 *
 * ProductCategories
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { FlatList, View } from "react-native";
import Category from "@app/atoms/Category";
import type { PropsType as CategoryType } from "@app/atoms/Category/types";

import type { PropsType } from "./types";
import { COLS, dummyCategories } from "./config";
import ProductCategoriesStyles from "./styles";

const ProductCategoriesTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const categoryItem = ({ item }: { item: CategoryType }) => {
    return (
      <Category iconName={item.iconName} name={item.name} onPress={onBack} />
    );
  };

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Choose Category",
          style: ProductCategoriesStyles.txtHeader,
        }}
      />
    );
  };

  const getCategories = () => {
    return (
      <FlatList
        numColumns={COLS}
        data={dummyCategories as never[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={categoryItem}
        contentContainerStyle={ProductCategoriesStyles.contentContainer}
        columnWrapperStyle={ProductCategoriesStyles.columnWrapper}
        ListFooterComponent={<View style={ProductCategoriesStyles.spacer} />}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <>{getCategories()}</>
    </>
  );
};

export default ProductCategoriesTemplate;
