/**
 *
 * ProductCategories
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FlatList, View } from "react-native";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import type { PropsType as CategoryType } from "@app/atoms/Category/types";
import Category from "@app/atoms/Category";

import type { PropsType } from "./types";
import { COLS, transformCategories } from "./config";
import ProductCategoriesStyles from "./styles";

const ProductCategoriesTemplate: FC<PropsType> = (props) => {
  const { onBack, categoryList, onCategory } = props;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const categoryItem = ({ item }: { item: CategoryType }) => {
    return (
      <Category
        id={item.id}
        iconName={item.iconName}
        name={item.name}
        onPress={() => onCategory(item.id, item.name)}
      />
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
        data={transformCategories(categoryList)}
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
