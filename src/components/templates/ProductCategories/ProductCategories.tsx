/**
 *
 * ProductCategories
 * @format
 *
 */

import React, { FC, Fragment } from "react";

import type { PropsType } from "./types";
import ProductCategoriesStyles from "./styles";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { FlatList, View } from "react-native";
import Category from "@app/atoms/Category";
import { Categories as CategoryType } from "@app/redux/api-models/category-list";
import { COLS, dummyCategories } from "./config";

const ProductCategoriesTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const categoryItem = ({ item }: { item: CategoryType }) => {
    return <Category name={item.name} onPress={onBack} />;
  };

  return (
    <Fragment>
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
      <FlatList
        numColumns={COLS}
        data={dummyCategories as never[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={categoryItem}
        contentContainerStyle={ProductCategoriesStyles.contentContainer}
        columnWrapperStyle={ProductCategoriesStyles.columnWrapper}
        ListFooterComponent={<View style={ProductCategoriesStyles.spacer} />}
      />
    </Fragment>
  );
};

export default ProductCategoriesTemplate;
